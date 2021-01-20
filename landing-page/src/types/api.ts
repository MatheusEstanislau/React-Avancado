export type logoProps = {
  alternativeText: string
  url: string
}

export type headerProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: {
    url: string
    alternativeText: string
  }
}

export type aboutProjectProps = {
  title: string
  description: string
  image: {
    alternativeText: string
    url: string
  }
}

export type techIcons = {
  id: string
  icon: {
    url: string
    alternativeText: string
  }
  title: string
}

export type techsProps = {
  title: string
  techIcons: techIcons[]
}

export type concepts = {
  title: string
  id: string
}

export type sectionConceptsProps = {
  title: string
  concepts: concepts[]
}

export type sectionModulesProps = {
  title: string
  modules: [
    {
      id: string
      title: string
      subtitle: string
      description: string
    }
  ]
}

export type sectionAgendaProps = {
  title: string
  description: string
}

export type pricingBoxProps = {
  totalprice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type socialLink = {
  id: string
  title: string
  url: string
}

export type Author = {
  id: string
  photo: {
    url: string
    alternativeText: string
  }
  name: string
  role: string
  socialLinks: socialLink[]
  description: string
}

export type sectionAboutUsProps = {
  title: string
  authors: Author[]
}

export type Review = {
  name: string
  text: string
  photo: {
    url: string
  }
}

export type sectionReviewsProps = {
  title: string
  reviews: Review[]
}

export type sectionFaqProps = {
  title: string
  questions: [
    {
      question: string
      answer: string
    }
  ]
}

export type landingPageProps = {
  logo: logoProps
  header: headerProps
  sectionAboutProject: aboutProjectProps
  sectionTech: techsProps
  sectionConcepts: sectionConceptsProps
  sectionModules: sectionModulesProps
  sectionAgenda: sectionAgendaProps
  pricingBox: pricingBoxProps
  sectionAboutUs: sectionAboutUsProps
  sectionReviews: sectionReviewsProps
  sectionFaq: sectionFaqProps
}
