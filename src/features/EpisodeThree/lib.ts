import { CollaborateCardProps } from 'src/shared/components/CollaborateCard'

export const collaborateCards: Omit<
  CollaborateCardProps,
  'onMouseEnter' | 'onMouseLeave'
>[] = [
  {
    header: '1099',
    summary: `Best for a focused problem or a few solutions. 
    Independent contributor for when you just need stuff done`,
    footer: 'PROTOCOL: INDEPENDENT-CONTRACTOR',
  },
  {
    header: 'C2C',
    summary: `Different legal weight, more responsibility. 
    I can contract with you and invoice your business directly, or through an intermediary. 
    When you need someone with more ownership and direction over a product than just some work done.`,
    footer: 'PROTOCOL: BUSINESS-TO-BUSINESS',
  },
  {
    header: 'W2',
    summary: `For when you need someone really embedded into the team. 
    Whether through an agency or directly with you, 
    when there's a lot of stuff to build, for a long time.`,
    footer: 'PROTOCOL: EMPLOYEE-OF-RECORD',
  },
]
