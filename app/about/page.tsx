/* eslint-disable @next/next/no-img-element */
"use client";

import { GithubLogo, XLogo } from '@phosphor-icons/react';
import { Bot, Brain, Command, GraduationCap, Image, Search, Share2, Sparkles, Star, Trophy, Users, AlertTriangle, Github, Twitter, FileText, ShieldCheck, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { TextLoop } from '@/components/core/text-loop';
import { TextShimmer } from '@/components/core/text-shimmer';
import { Check } from 'lucide-react';
import { redirect, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { VercelLogo } from '@/components/logos/vercel-logo';
import { TavilyLogo } from '@/components/logos/tavily-logo';
import NextImage from 'next/image';
import { Checkbox } from "@/components/ui/checkbox";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function AboutPage() {
    const [showTermsDialog, setShowTermsDialog] = useState(false);
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    
    useEffect(() => {
        // Check if user has seen the terms
        const hasAcceptedTerms = localStorage.getItem('hasAcceptedTerms');
        if (!hasAcceptedTerms) {
            setShowTermsDialog(true);
        }
    }, []);

    const handleAcceptTerms = () => {
        if (acceptedTerms) {
            setShowTermsDialog(false);
            localStorage.setItem('hasAcceptedTerms', 'true');
        }
    };

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const query = formData.get('query')?.toString();
        if (query) {
            redirect(`/?q=${encodeURIComponent(query)}`);
        }
    };

    return (
        <div className="min-h-screen bg-background overflow-hidden">
            {/* Top Navigation Bar */}
            <div className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-neutral-200 dark:border-neutral-800">
                <div className="container max-w-5xl mx-auto py-3 px-4 flex justify-between items-center">
                    <Link href="/" className="flex items-center gap-2">
                        <NextImage src="/scira.png" alt="Scira Logo" className="h-8 w-8 invert dark:invert-0" width={32} height={32} unoptimized quality={100}/>
                        <span className="font-syne font-bold text-lg">Scira</span>
                    </Link>
                    
                    <div className="flex items-center gap-6">
                        <Link 
                            href="/terms"
                            className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors"
                        >
                            Terms of Service
                        </Link>
                        <Link 
                            href="/privacy"
                            className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link 
                            href="https://git.new/scira"
                            className="hidden sm:flex items-center gap-1.5 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Github className="h-4 w-4" />
                            <span>GitHub</span>
                        </Link>
                    </div>
                </div>
            </div>

            <Dialog open={showTermsDialog} onOpenChange={setShowTermsDialog}>
                <DialogContent className="sm:max-w-[500px] p-0 bg-background border border-border">
                    <div className="p-6 border-b border-border">
                        <DialogHeader>
                            <DialogTitle className="flex items-center gap-2 text-primary">
                                <FileText className="size-5" />
                                Terms and Privacy
                            </DialogTitle>
                            <DialogDescription className="text-muted-foreground mt-2.5">
                                Before you continue, please review our Terms of Service and Privacy Policy.
                            </DialogDescription>
                        </DialogHeader>
                    </div>
                    
                    <div className="px-6 py-5 space-y-6 max-h-[300px] overflow-y-auto">
                        <div className="space-y-3">
                            <h3 className="text-sm font-medium flex items-center gap-2">
                                <ShieldCheck className="size-4 text-primary" />
                                Terms of Service
                            </h3>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                By using Opus, you agree to our Terms of Service which outline the rules for using our platform. 
                                This includes guidelines on acceptable use, intellectual property rights, and limitations of liability.
                            </p>
                            <Link href="/terms" className="text-xs text-primary hover:underline inline-flex items-center">
                                Read full Terms of Service
                                <ArrowUpRight className="size-3 ml-1" />
                            </Link>
                        </div>
                        
                        <div className="space-y-3 pt-2">
                            <h3 className="text-sm font-medium flex items-center gap-2">
                                <ShieldCheck className="size-4 text-primary" />
                                Privacy Policy
                            </h3>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                Our Privacy Policy describes how we collect, use, and protect your personal information. 
                                We take your privacy seriously and are committed to maintaining the confidentiality of your data.
                            </p>
                            <Link href="/privacy" className="text-xs text-primary hover:underline inline-flex items-center">
                                Read full Privacy Policy
                                <ArrowUpRight className="size-3 ml-1" />
                            </Link>
                        </div>
                    </div>
                    
                    <div className="px-6 pt-1 pb-4">
                        <div className="flex items-start space-x-3 p-3 rounded-md bg-accent/50 border border-border">
                            <Checkbox 
                                id="terms" 
                                checked={acceptedTerms}
                                onCheckedChange={() => setAcceptedTerms(!acceptedTerms)}
                                className="mt-0.5"
                            />
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium cursor-pointer"
                            >
                                I agree to the Terms of Service and Privacy Policy
                            </label>
                        </div>
                    </div>
                    
                    <DialogFooter className="p-6 pt-2">
                        <Button 
                            variant="default" 
                            onClick={handleAcceptTerms}
                            disabled={!acceptedTerms}
                            className="w-full"
                        >
                            Continue
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Hero Section */}
            <div className="relative">
                <div className="absolute inset-0 bg-linear-to-b from-neutral-100/40 dark:from-neutral-900/40" />
                <div className="absolute inset-0 bg-grid-neutral-700/[0.05] dark:bg-grid-neutral-300/[0.05]" />
                <div className="relative pt-20 pb-20 px-4">
                    <motion.div 
                        className="container max-w-5xl mx-auto space-y-12"
                        variants={container}
                        initial="hidden"
                        animate="show"
                    >
                        {/* Company Name/Logo */}
                        <motion.div variants={item} className="text-center">
                            <Link href="/" className="inline-flex items-end gap-3 text-5xl font-syne font-bold">
                                <NextImage src="/scira.png" alt="Scira Logo" className="h-16 w-16 invert dark:invert-0" width={64} height={64} unoptimized quality={100}/>
                                <span className=''>Opus</span>
                            </Link>
                        </motion.div>

                        <motion.form 
                            variants={item} 
                            className="max-w-2xl mx-auto w-full"
                            onSubmit={handleSearch}
                        >
                            <div className="relative group">
                                <input
                                    type="text"
                                    name="query"
                                    placeholder="Ask anything..."
                                    className="w-full h-14 px-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 focus:border-neutral-300 dark:focus:border-neutral-700 focus:outline-hidden focus:ring-2 focus:ring-neutral-300 dark:focus:ring-neutral-700 transition-all duration-300"
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault();
                                            const query = e.currentTarget.value;
                                            if (query) {
                                                redirect(`/?q=${encodeURIComponent(query)}`);
                                            }
                                        }
                                    }}
                                />
                                <button
                                    type="submit"
                                    className="absolute right-2 top-2 h-10 px-4 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium hover:opacity-90 transition-opacity"
                                >
                                    Ask Opus
                                </button>
                            </div>
                        </motion.form>

                        <motion.div variants={item} className="text-center space-y-6">
                            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                                A minimalistic AI-powered search engine with RAG and search grounding capabilities. Open source and built for everyone.
                            </p>
                        </motion.div>

                        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4">
                            <Link
                                href="https://git.new/scira"
                                className="group relative inline-flex h-12 items-center gap-2 px-6 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:opacity-90 transition-all duration-300"
                            >
                                <GithubLogo weight="fill" className="h-5 w-5" />
                                <span className="font-medium">View Source</span>
                            </Link>
                            <Link
                                href="/"
                                className="group relative inline-flex h-12 items-center gap-2 px-6 rounded-xl bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all duration-300"
                            >
                                <span className="font-medium">Try Now</span>
                                <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none">
                                    <path d="M6.66667 12.6667L11.3333 8.00004L6.66667 3.33337" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Search Simulation */}
            <div className="py-24 px-4 bg-white dark:bg-black border-y border-neutral-200 dark:border-neutral-800">
                <motion.div 
                    className="container max-w-5xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center space-y-4 mb-16">
                        <h2 className="text-3xl font-bold">RAG & Search Grounding</h2>
                        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                            Watch how Opus combines RAG and search grounding to deliver accurate, up-to-date answers from reliable sources.
                        </p>
                    </div>

                    <div className="relative max-w-2xl mx-auto rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-8 space-y-8">
                        {/* Query */}
                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-800 shrink-0" />
                            <div className="flex-1 space-y-2">
                                <p className="text-sm text-neutral-500">Query</p>
                                <p className="text-neutral-900 dark:text-neutral-100">
                                    Explain quantum computing and its real-world applications
                                </p>
                            </div>
                        </div>

                        {/* Processing */}
                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 shrink-0 flex items-center justify-center">
                                <Bot className="w-4 h-4 text-blue-500" />
                            </div>
                            <div className="flex-1 space-y-4">
                                <div className="space-y-2">
                                    <p className="text-sm text-neutral-500">Processing with</p>
                                    <TextLoop interval={1.5}>
                                        <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                                            🔍 Retrieving relevant information...
                                        </p>
                                        <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                                            📚 Processing search results...
                                        </p>
                                        <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                                            🤖 Generating response...
                                        </p>
                                        <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                                            ✨ Enhancing with context...
                                        </p>
                                    </TextLoop>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-sm text-neutral-500">Generating response</p>
                                    <TextShimmer className="text-sm font-medium">
                                        Combining insights from multiple sources for a comprehensive answer...
                                    </TextShimmer>
                                </div>
                            </div>
                        </div>

                        {/* Response Preview */}
                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 shrink-0 flex items-center justify-center">
                                <Check className="w-4 h-4 text-green-500" />
                            </div>
                            <div className="flex-1 space-y-2">
                                <p className="text-sm text-neutral-500">Response Preview</p>
                                <div className="prose prose-sm dark:prose-invert">
                                    <p className="text-neutral-900 dark:text-neutral-100">
                                        Quantum computing is a revolutionary technology that harnesses quantum mechanics to solve complex problems...
                                    </p>
                                    <div className="text-xs text-neutral-500 mt-2">
                                        Sources: Nature Physics, IBM Research, MIT Technology Review
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Powered By Section */}
            <div className="py-24 px-4 bg-white dark:bg-black border-y border-neutral-200 dark:border-neutral-800">
                <motion.div 
                    className="container max-w-5xl mx-auto space-y-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl font-bold">Powered By</h2>
                        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                            Built with cutting-edge technology from industry leaders
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex flex-col items-center justify-center gap-4">
                            <VercelLogo />
                            <p className="text-neutral-600 dark:text-neutral-400 text-center">
                                Powered by Vercel&apos;s AI SDK
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex flex-col items-center justify-center gap-4">
                            <TavilyLogo />
                            <p className="text-neutral-600 dark:text-neutral-400 text-center">
                                Search grounding powered by Tavily AI
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Stats Section */}
            <div className="py-24 px-4 bg-white dark:bg-black border-y border-neutral-200 dark:border-neutral-800">
                <motion.div 
                    className="container max-w-5xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center space-y-2">
                            <div className="text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400">
                                1M+
                            </div>
                            <p className="text-neutral-600 dark:text-neutral-400">Questions Answered</p>
                        </div>
                        <div className="text-center space-y-2">
                            <div className="text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400">
                                100K+
                            </div>
                            <p className="text-neutral-600 dark:text-neutral-400">Active Users</p>
                        </div>
                        <div className="text-center space-y-2">
                            <div className="text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400">
                                7K+
                            </div>
                            <p className="text-neutral-600 dark:text-neutral-400">Community Stars</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Highlight Section */}
            <div className="py-24 px-4 bg-white dark:bg-neutral-900/50">
                <motion.div 
                    className="container max-w-5xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold">Featured on Vercel&apos;s Blog</h2>
                            <p className="text-lg text-neutral-600 dark:text-neutral-400">
                                Recognized for our innovative use of AI technology and contribution to the developer community through the Vercel AI SDK.
                            </p>
                            <Link
                                href="https://vercel.com/blog/ai-sdk-4-1"
                                className="inline-flex items-center gap-2 text-neutral-900 dark:text-white font-medium hover:opacity-80 transition-opacity"
                            >
                                Read the Feature
                                <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                                    <path d="M6.66667 12.6667L11.3333 8.00004L6.66667 3.33337" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </Link>
                        </div>
                        <div className="relative aspect-video rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                            <img 
                                src="/vercel-featured.png" 
                                alt="Featured on Vercel Blog" 
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Integration Section - Add before Use Cases */}
            <div className="py-24 px-4">
                <motion.div 
                    className="container max-w-5xl mx-auto space-y-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl font-bold">Powered By Advanced Language Models</h2>
                        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                            Each model is carefully selected for its unique strengths in understanding and processing information.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row flex-wrap justify-center items-stretch gap-6">
                        <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 w-full sm:w-[calc(50%-12px)] lg:w-[280px]">
                            <h3 className="font-semibold">Grok 3.0</h3>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">xAI&apos;s most intelligent model</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 w-full sm:w-[calc(50%-12px)] lg:w-[280px]">
                            <h3 className="font-semibold">Grok 3.0 Mini</h3>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">xAI&apos;s most efficient model</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 w-full sm:w-[calc(50%-12px)] lg:w-[280px]">
                            <h3 className="font-semibold">Grok 2.0 Vision</h3>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">xAI&apos;s most advanced vision model</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 w-full sm:w-[calc(50%-12px)] lg:w-[280px]">
                            <h3 className="font-semibold">OpenAI GPT 4.1 Mini</h3>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">OpenAI&apos;s smartest mini model</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 w-full sm:w-[calc(50%-12px)] lg:w-[280px]">
                            <h3 className="font-semibold">Qwen QWQ 32B</h3>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">Alibaba&apos;s most advanced model</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Testimonial Section - Add before CTA */}
            <div className="py-20 px-4 bg-white dark:bg-black border-y border-neutral-200 dark:border-neutral-800">
                <motion.div 
                    className="container max-w-5xl mx-auto space-y-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center space-y-3">
                        <h2 className="text-3xl font-bold">Community Recognition</h2>
                        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                            Join the growing community of developers and researchers using Scira.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex flex-col justify-between">
                            <div className="flex items-center gap-4">
                                <img src="/Winner-Medal-Weekly.svg" alt="Award" className="h-10 w-10" />
                                <div className="space-y-1">
                                    <h3 className="font-semibold">#3 Project of the Week</h3>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400">Peerlist</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex flex-col justify-between">
                            <div className="flex items-center gap-4">
                                <GithubLogo weight="fill" className="h-10 w-10" />
                                <div className="space-y-1">
                                    <h3 className="font-semibold">7,000+ Stars</h3>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400">GitHub</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex flex-col justify-between">
                            <div className="flex items-center gap-4">
                                <Users className="h-10 w-10" />
                                <div className="space-y-1">
                                    <h3 className="font-semibold">100K+ Monthly Users</h3>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400">Active Community</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Features Section */}
            <div className="py-24 px-4">
                <motion.div 
                    className="container max-w-5xl mx-auto space-y-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl font-bold">Advanced Search Features</h2>
                        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                            Experience a smarter way to search with AI-powered features that understand your queries better.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { 
                                icon: Brain, 
                                title: "Smart Understanding",
                                description: "Uses multiple AI models to better understand your questions" 
                            },
                            { 
                                icon: Search, 
                                title: "Comprehensive Search",
                                description: "Searches across multiple sources for complete answers" 
                            },
                            { 
                                icon: Image, 
                                title: "Image Understanding",
                                description: "Can understand and explain images you share" 
                            },
                            { 
                                icon: Command, 
                                title: "Smart Calculations",
                                description: "Performs complex calculations and analysis in real-time" 
                            },
                            { 
                                icon: GraduationCap, 
                                title: "Research Assistant",
                                description: "Helps find and explain academic research" 
                            },
                            { 
                                icon: Sparkles, 
                                title: "Natural Conversations",
                                description: "Responds in a clear, conversational way" 
                            }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                className="group relative p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300"
                                whileHover={{ y: -4 }}
                            >
                                <div className="space-y-4">
                                    <div className="p-2.5 w-fit rounded-xl bg-neutral-100 dark:bg-neutral-800">
                                        <feature.icon className="h-6 w-6" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-semibold">{feature.title}</h3>
                                        <p className="text-neutral-600 dark:text-neutral-400">{feature.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* New Use Cases Section */}
            <div className="py-24 px-4 bg-neutral-50 dark:bg-neutral-900/50 border-y border-neutral-200 dark:border-neutral-800">
                <motion.div className="container max-w-5xl mx-auto space-y-16">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl font-bold">Built For Everyone</h2>
                        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                            Whether you need quick answers or in-depth research, Opus adapts to your search needs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                            <h3 className="text-lg font-semibold mb-2">Students</h3>
                            <ul className="list-disc list-inside space-y-2 text-neutral-600 dark:text-neutral-400">
                                <li>Research paper assistance</li>
                                <li>Complex topic explanations</li>
                                <li>Math problem solving</li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                            <h3 className="text-lg font-semibold mb-2">Researchers</h3>
                            <ul className="list-disc list-inside space-y-2 text-neutral-600 dark:text-neutral-400">
                                <li>Academic paper analysis</li>
                                <li>Data interpretation</li>
                                <li>Literature review</li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                            <h3 className="text-lg font-semibold mb-2">Professionals</h3>
                            <ul className="list-disc list-inside space-y-2 text-neutral-600 dark:text-neutral-400">
                                <li>Market research</li>
                                <li>Technical documentation</li>
                                <li>Data analysis</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Footer Section */}
            <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black">
                <div className="mx-auto max-w-5xl px-4 py-12">
                    <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                        <div className="flex items-center gap-3">
                            <img src="/scira.png" alt="Opus Logo" className="h-8 w-8" />
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                © {new Date().getFullYear()} All rights reserved.
                            </p>
                        </div>
                        
                        <div className="flex items-center gap-3">
                            <Link
                                href="/terms"
                                className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors"
                            >
                                Terms
                            </Link>
                            <span className="text-neutral-300 dark:text-neutral-700">|</span>
                            <Link
                                href="/privacy"
                                className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors"
                            >
                                Privacy
                            </Link>
                            <span className="text-neutral-300 dark:text-neutral-700">|</span>
                            <Link
                                href="https://x.com/sciraai"
                                className="rounded-lg p-2 text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <XLogo className="h-5 w-5" />
                            </Link>
                            <Link
                                href="https://git.new/scira"
                                className="rounded-lg p-2 text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
} 