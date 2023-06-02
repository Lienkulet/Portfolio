export default {
    name: 'project',
    title: 'Procjects',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 90
            }
        },
        {
            name: 'github',
            title: 'Github',
            type: 'string',
        },
        {
            name: 'liveDemo',
            title: 'Live Demo',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            name: 'technologies',
            title: 'Technologies',
            type: 'array',
            of: [
                {
                    name: 'technology',
                    type: 'reference',
                    to: [
                        {
                            type: 'technology'
                        }
                    ]
                }
            ]
        }
    ]
}