import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId:'2a5htyvu',
    dataset:'production',
    apiVersion:'2022-02-01',
    useCdn:true,
    token:'skKzfoZ6JB5XEdcpNj8vkh0AYFzL4V4Id4CyG0EwouFwhfHTB40ZvPWFxe8mwrY9q2PZLG7cPTrcVR5FmEIVkztt4VqNe69jTkV73Zeg69ZTu9rOIN2FVNMvkfVWdiy3GKoxKLKzGgo3vg5Exuj8fbHe16pZp6SXgYQa9xXl9fPYkYsvFG6m'
,
})