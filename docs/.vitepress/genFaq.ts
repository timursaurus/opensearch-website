import path from 'node:path'
import { writeFileSync } from 'node:fs'
import { Feed } from 'feed'
import { createContentLoader, type SiteConfig } from 'vitepress'

const baseUrl = 'https://opensearch.org'

export async function genFaq() {
  const feed = new Feed({
    title: 'OpenSearch FAQ',
    description: 'Frequently asked questions about OpenSearch',
    id: baseUrl + '/faq',
    link: baseUrl + '/faq',
    language: 'en',
    // image: 'https://opensearch.org/opensearch-logo.svg',
    copyright: `© OpenSearch contributors, ${new Date().getFullYear()}`
  })

  const faqs = await createContentLoader('_faq/*.md', {
    excerpt: true,
    render: true,
  }).load()

}