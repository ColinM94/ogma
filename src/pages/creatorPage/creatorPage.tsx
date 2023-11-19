import { useNavigate } from 'react-router-dom'

import { Button, Card, InputSelect, InputText } from 'components'
import { MainLayout } from 'layouts'
import { addDocument } from 'services'

import styles from './styles.module.scss'
import { reactReducer } from 'utils'
import { FlashCardInfo } from 'types'

export const CreatorPage = () => {
  const navigate = useNavigate()

  const [flashCard, updateFlashCard] = reactReducer<FlashCardInfo>({
    id: '',
    front: '',
    back: '',
    type: 'noun',
  })

  const handleAddClick = () => {
    try {
      if (flashCard.front === '' && flashCard.back === '') return

      addDocument('cards', flashCard)
      navigate('/flashcards')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <MainLayout showHeader showBackButton showSettingsButton label="Create Flash Card">
      <Card className={styles.card}>
        <InputText
          label="Front"
          placeholder="Front"
          value={flashCard.front}
          setValue={(front) => updateFlashCard({ front })}
        />

        <InputText
          placeholder="Back"
          value={flashCard.back}
          setValue={(back) => updateFlashCard({ back })}
        />

        <InputSelect
          value={flashCard.type}
          setValue={(type) => updateFlashCard({ type })}
          options={[
            {
              value: 'noun',
              label: 'Noun',
            },
            {
              value: 'verb',
              label: 'Verb',
            },
          ]}
        />
      </Card>

      <Button label="Save" onClick={handleAddClick} />
    </MainLayout>
  )
}
