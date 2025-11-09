import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Study materials collection
const study = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/study' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		category: z.enum(['upsc', 'ssc', 'banking', 'railways', 'state-psc', 'teaching', 'defense']),
		subject: z.string(),
		difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
		tags: z.array(z.string()).optional(),
		lastUpdated: z.date(),
		author: z.string().optional(),
		references: z.array(z.object({
			title: z.string(),
			url: z.string().optional(),
		})).optional(),
	}),
});

// Questions collection
const questions = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/questions' }),
	schema: z.object({
		question: z.string(),
		options: z.array(z.string()),
		correctAnswer: z.number(),
		explanation: z.string(),
		category: z.enum(['upsc', 'ssc', 'banking', 'railways', 'state-psc', 'teaching', 'defense']),
		subject: z.string(),
		topic: z.string(),
		difficulty: z.enum(['easy', 'medium', 'hard']),
		tags: z.array(z.string()).optional(),
		source: z.string().optional(),
		year: z.number().optional(),
	}),
});

// Mock tests collection
const tests = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/tests' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		category: z.enum(['upsc', 'ssc', 'banking', 'railways', 'state-psc', 'teaching', 'defense']),
		duration: z.number(), // in minutes
		totalQuestions: z.number(),
		totalMarks: z.number(),
		passingMarks: z.number(),
		negativeMarking: z.boolean(),
		difficulty: z.enum(['easy', 'medium', 'hard']),
		subjects: z.array(z.string()),
		questionIds: z.array(z.string()),
	}),
});

// Current affairs collection
const currentAffairs = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/currentAffairs' }),
	schema: z.object({
		title: z.string(),
		date: z.date(),
		category: z.string(),
		topics: z.array(z.string()).optional(),
		importance: z.enum(['high', 'medium', 'low']).optional(),
		exams: z.array(z.string()).optional(),
		tags: z.array(z.string()).optional(),
		summary: z.string(),
	}),
});

// Videos collection
const videos = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/videos' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		category: z.enum(['upsc', 'ssc', 'banking', 'railways', 'state-psc', 'teaching', 'defense']),
		subject: z.string(),
		topic: z.string(),
		duration: z.number(), // in seconds
		videoUrl: z.string(),
		thumbnailUrl: z.string().optional(),
		transcript: z.string().optional(),
		tags: z.array(z.string()).optional(),
		instructor: z.string().optional(),
		uploadDate: z.date(),
	}),
});

export const collections = {
	study,
	questions,
	tests,
	currentAffairs,
	videos,
};
