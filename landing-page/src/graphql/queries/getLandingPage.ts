const GET_LANDING_PAGE = /* GraphQL */ `
  fragment logo on LandingPage {
    logo {
      alternativeText
      url
    }
  }

  fragment header on LandingPage {
    header {
      title
      description
      button {
        label
        url
      }
      image {
        url
        alternativeText
      }
    }
  }

  fragment about on LandingPage {
    sectionAboutProject {
      title
      description
      image {
        alternativeText
        url
      }
    }
  }

  fragment techs on LandingPage {
    sectionTech {
      title
      techIcons {
        id
        icon {
          url
          alternativeText
        }
        title
      }
    }
  }

  fragment concepts on LandingPage {
    sectionConcepts {
      title
      concepts {
        title
        id
      }
    }
  }

  fragment modules on LandingPage {
    sectionModules {
      title
      modules {
        id
        title
        subtitle
        description
      }
    }
  }

  fragment agenda on LandingPage {
    sectionAgenda {
      title
      description
    }
  }

  fragment pricing on LandingPage {
    pricingBox {
      totalprice
      numberInstallments
      priceInstallment
      benefits
      button {
        label
        url
      }
    }
  }

  fragment aboutUs on LandingPage {
    sectionAboutUs {
      title
      authors {
        id
        photo {
          url
          alternativeText
        }
        name
        role
        socialLinks {
          id
          title
          url
        }
        description
      }
    }
  }

  fragment reviews on LandingPage {
    sectionReviews {
      title
      reviews {
        name
        text
        photo {
          url
        }
      }
    }
  }

  fragment faq on LandingPage {
    sectionFaq {
      title
      questions {
        question
        answer
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...header
      ...about
      ...techs
      ...concepts
      ...modules
      ...agenda
      ...pricing
      ...aboutUs
      ...reviews
      ...faq
    }
  }
`
export default GET_LANDING_PAGE
