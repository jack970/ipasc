import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import * as S from '../components/Post/styled'
import Reactmarkdown from 'react-markdown'

const BlogPost = ({ data }) => {
    const post = data.strapiPosts
    return(
        <Layout>
            <SEO title={post.title} 
            description={post.description} 
            image={post.image.childImageSharp.fluid}/>
            <S.PostHeader>
                <S.PostDate>
                    Publicado em {post.data}
                </S.PostDate>
                <S.PostImage fluid =
                {post.image.childImageSharp.fluid}
                />
                <S.PostTitle>
                    {post.title}
                </S.PostTitle>
                <S.PostDescription>
                    {post.description}
                </S.PostDescription>
            </S.PostHeader>
            <Reactmarkdown source={post.content}/>
        </Layout>
    )
}

export const query = graphql`
    query Post($id: String!) {
        strapiPosts(id: {eq: $id}) {
            title
            data(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            content
            image {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
    `

export default BlogPost
