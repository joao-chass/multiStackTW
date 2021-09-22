import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment'
import PageTiltle from 'ui/components/data-display/PageTitle/PageTiltle';
import UserUInformation from 'ui/components/data-display/UserInformation/UserInformation'
import TextFieldMask from 'ui/components/inputs/TextFieldMask/TextFieldMask';
import { Button, CircularProgress, Container, Typography } from '@material-ui/core';
import { FormElementsContainer, ProfissionaiPaper, ProfissionaisContainer } from 'styles/pages/index.styles'
import useIndex from 'data/hooks/pages/useIndex.page'

export default function Home() {

  const {
    cep,
    setCep,
    cepValido,
    buscarProfissionais,
    erro,
    diaristas,
    buscaFeita,
    carregando,
    diaristasRestantes
  } = useIndex();

  return (
    <div>
      <SafeEnvironment />
      <PageTiltle
        title={'Conheça os profissionais'}
        subtitle={'Deixe seu endereço e veja todos os profissionais da sua localidade'}
      >
      </PageTiltle>


      <Container>
        <FormElementsContainer >
          <TextFieldMask
            mask={'99.999-999'}
            label={'Digite seu CEP'}
            fullWidth
            variant={'outlined'}
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />

          {erro && <Typography color={'error'}> {erro} </Typography>}


          <Button
            variant={'contained'}
            color={'secondary'}
            sx={{ width: '220px' }}
            disabled={!cepValido || carregando}
            onClick={() => buscarProfissionais(cep)}
          >
            {carregando ? <CircularProgress size={20} /> : 'Buscar'}


          </Button>
        </FormElementsContainer>

        {buscaFeita && (diaristas.length > 0 ?
          <ProfissionaiPaper>
            <ProfissionaisContainer>
              {diaristas.map((item, index) => {
                return (
                  <UserUInformation
                    key={index}
                    name={item.nome_completo}
                    picture={item.foto_usuario}
                    rating={item.reputacao}
                    description={item.cidade}
                  />
                )
              })}
            </ProfissionaisContainer>

            <Container sx={{ textAlign: 'center' }}>
              {diaristasRestantes > 0 && (
                <Typography sx={{ mt: 5 }}>
                  ..e mais {diaristasRestantes} {diaristasRestantes > 1 ? 'profissionais atedem' : 'profisional atede'} ao seu endereço.
                </Typography>
              )}

              <Button variant={'contained'} color={'secondary'} sx={{ mt: 5 }}>
                Contratar um profisiional
              </Button>
            </Container>
          </ProfissionaiPaper>
          :
          (
            <Typography align={'center'} color={'textPrimary'}>
              Não disponivél em sua região
            </Typography>
          )
        )}


      </Container>

    </div>
  )
}
