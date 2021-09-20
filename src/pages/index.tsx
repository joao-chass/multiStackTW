import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment'
import PageTiltle from 'ui/components/data-display/PageTitle/PageTiltle';
import UserUInformation from 'ui/components/data-display/UserInformation/UserInformation'

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTiltle
        title={'Conheça os profissionais'}
        subtitle={'Deixe seu endereço e veja todos os profissionais da sua localidade'}
      >
      </PageTiltle>

      <UserUInformation
        name={'sddsas borges'}
        picture={'https://github.com/joao-chass.png'}
        rating={3}
        description={'São Paulo'}
      />
    </div>
  )
}
