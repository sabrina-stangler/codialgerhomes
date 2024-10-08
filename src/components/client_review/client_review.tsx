import { IClientReview } from '../../models'
import { MONTHS_ABBREVIATED } from '../../constants'
import QuoteTick from '../../assets/quote-tick.svg'
import QuoteBackTick from '../../assets/quote-back-tick.svg'
import './client_review.css'

interface IClientReviewProps {
  review: IClientReview
}

export function ClientReview({ review }: IClientReviewProps) {
  return (
    <div className='client-review-container' key={review.id}>
      <div className='client-review-left'>
        <span className='client-review-initials'>{review.initials}</span>
        <span className='client-review-date'>
          {MONTHS_ABBREVIATED[review.month - 1]}
          {" '"}
          {review.year.toString().slice(2)}
        </span>
      </div>
      <div className='client-review-right'>
        <div className='client-review-forward-tick'>
          <img key={review.id + '-tick'} src={QuoteTick} alt='quote tick' height='15px' className='client-review-tick' />
        </div>
        <div className='client-review-text'>
          {review.quote.map((p) => (
            <p dangerouslySetInnerHTML={{ __html: p }}></p>
          ))}
        </div>
        <div className='client-review-back-tick'>
          <img key={review.id + '-back-tick'} src={QuoteBackTick} alt='quote tick' height='15px' />
        </div>
      </div>
    </div>
  )
}
