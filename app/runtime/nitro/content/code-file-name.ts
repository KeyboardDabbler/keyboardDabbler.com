import { visit } from 'unist-util-visit'
import type { MarkdownNode } from '@nuxt/content/dist/runtime/types'
import type { ParsedContent } from '~/types'

export function CodeFilename(content: ParsedContent) {
  visit(
    content.body,
    (node: MarkdownNode) => node?.tag === 'code' && (node?.props?.filename || node?.props?.language),
    (node: MarkdownNode, index, parent: MarkdownNode) => {
      const children: MarkdownNode[] = []
      if (node.props.filename) {
        children.push({
          type: 'element',
          tag: 'span',
          props: {
            class: 'code-block__filename',
          },
          children: [
            { type: 'text', value: node?.props?.filename },
          ],
        })
      }
      children.push(node)
      parent.children.splice(index, 1, ...[
        {
          type: 'element',
          tag: 'CodeBlock',
          props: {
            'data-language': node.props.language,
            'class': [
              'code-block',
              node.props.filename ? 'code-block--with-filename' : '',
            ].join(' '),
          },
          children,
        },
      ])
    },
  )
  return content
}