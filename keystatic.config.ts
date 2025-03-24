// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

export default config({
    storage: {
        kind: 'local',
    },
    cloud: {
        project: 'astro-stuzbn/yingdaoye-1',
    },
    ui: {
        brand: { name: "星落引导页设置" },
    },

    collections: {
        posts: collection({
            label: '全部文章',
            slugField: 'title',
            entryLayout: "content",
            path: 'src/posts/*',
            format: { contentField: 'content' },
            schema: {
                title: fields.slug({
                    name: {
                        label: '标题',
                    },
                }),
                slug: fields.text({
                    label: '文件名称',
                    description: '请与上方slug保持一致',
                }),
                description: fields.text({
                    label: '描述',
                    description: '15个字以上',
                }),
                pubDate: fields.date({
                    label: '发布时间',
                    description: 'The publishDate of the event'
                }),
                updatedDate: fields.date({
                    label: '修改时间',
                    description: 'The publishDate of the event'
                }),


                hero: fields.image({
                    label: '头图',
                    directory: 'src/posts/img/',
                    publicPath: 'src/posts/img/'
                }),
                heroAlt: fields.text({
                    label: '描述',
                    description: '15个字以上',
                }),
                tags: fields.array(
                    fields.text({ label: 'Tag' }),
                    // Labelling options
                    {
                      label: 'Tag',
                      itemLabel: props => props.value
                    }
                  ),
                content: fields.mdx({
                    label: 'Content',
                    extension: 'md',
                    options: {
                        image: {
                            directory: 'src/content/post/',
                            publicPath: 'src/content/post/'
                        }
                    }
                }),
            },
        }),
    },
});