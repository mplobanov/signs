import { Layout } from "../layout/_Layout";
import { SimplePage } from "../../components/Page/SimplePage";
import styled from "styled-components";
import { Module } from "./Module";
import { InputWrapper } from "../../forms/InputWrapper";
import { Header } from "./Header";

import laundry from "./laundry.png";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);

  width: 100%;
  height: 100%;

  row-gap: 16px;
  column-gap: 9px;
`;

const Img = styled.img`
  width: 100%;
  position: relative;
  margin-top: 5px;
  left: -6px;
`;

const Img2 = styled.img`
  height: 40px;
  width: 40px;
`;

export const Laundry = () => {
  return (
    <Layout formTitle={"Galileo"}>
      <SimplePage height={500 * Math.sqrt(2)} width={500}>
        <Container>
          <Header />

          <InputWrapper
            name={"header-1"}
            title={"Карточка 1: Заголовок"}
            lockedText={"Забронировать стиралку"}
          >
            {(text) => (
              <InputWrapper
                name={"desc-1"}
                title={"Карточка 1: Описание"}
                lockedText={
                  "Использовать можно только ту стиралку, которую ты забронировал и только в забронированное время"
                }
              >
                {(text1) => (
                  <Module
                    header={text ?? ""}
                    color={"orange"}
                    number={"1"}
                    qr={"mipt.tech"}
                  >
                    {text1}
                    <span>mipt.tech</span>
                  </Module>
                )}
              </InputWrapper>
            )}
          </InputWrapper>

          <InputWrapper
            name={"header-2"}
            title={"Карточка 2: Заголовок"}
            lockedText={"Прийти и загрузить вещи"}
          >
            {(text) => (
              <InputWrapper
                name={"desc-2"}
                title={"Карточка 2: Описание"}
                lockedText={
                  "Цветные и белые вещи лучше стирать отдельно. Не запихивайте слишком много - стиралка не справится. Лучше не больше 6 кг."
                }
              >
                {(text1) => (
                  <Module header={text ?? ""} color={"blue"} number={"2"}>
                    {text1}
                  </Module>
                )}
              </InputWrapper>
            )}
          </InputWrapper>

          <InputWrapper
            name={"header-3"}
            title={"Карточка 3: Заголовок"}
            lockedText={"Насыпать порошок"}
          >
            {(text) => (
              <InputWrapper
                name={"desc-3"}
                title={"Карточка 3: Описание"}
                lockedText={"Засыпайте в левое отделение II"}
              >
                {(text3) => (
                  <Module header={text ?? ""} color={"orange"} number={"3"}>
                    {text3}
                    <Img src={laundry} />
                  </Module>
                )}
              </InputWrapper>
            )}
          </InputWrapper>

          <InputWrapper
            name={"header-4"}
            title={"Карточка 4: Заголовок"}
            lockedText={"Выбрать режим и запустить"}
          >
            {(text) => (
              <InputWrapper
                name={"desc-4"}
                title={"Карточка 4: Описание"}
                lockedText={
                  'Если сомневаетесь, то можно выбрать "Смешанный" или "Хлопок"'
                }
              >
                {(text4) => (
                  <Module header={text ?? ""} color={"blue"} number={"4"}>
                    {text4}
                  </Module>
                )}
              </InputWrapper>
            )}
          </InputWrapper>

          <InputWrapper
            name={"header-5"}
            title={"Карточка 5: Заголовок"}
            lockedText={"Вытащить вещи из стиралки"}
          >
            {(text) => (
              <InputWrapper
                name={"desc-5"}
                title={"Карточка 5: Описание"}
                lockedText={
                  "Сушилки бронировать не нужно. Перед запуском вытряхните пыль и слейте воду. Можно использовать зеленые ящики."
                }
              >
                {(text5) => (
                  <Module header={text ?? ""} color={"blue"} number={"5"}>
                    {text5}
                  </Module>
                )}
              </InputWrapper>
            )}
          </InputWrapper>

          <InputWrapper
            name={"header-6"}
            title={"Карточка 6: Заголовок"}
            lockedText={"Перенести вещи в сушилку"}
          >
            {(text) => (
              <InputWrapper
                name={"desc-6"}
                title={"Карточка 6: Описание"}
                lockedText={
                  "Сушилки бронировать не нужно. Перед запуском вытряхните пыль и слейте воду. Можно использовать зеленые ящики."
                }
              >
                {(text6) => (
                  <Module header={text ?? ""} color={"orange"} number={"6"}>
                    {text6}
                  </Module>
                )}
              </InputWrapper>
            )}
          </InputWrapper>

          <InputWrapper
            name={"header-7"}
            title={"Карточка 7: Заголовок"}
            lockedText={"Забрать вещи"}
          >
            {(text) => (
              <InputWrapper
                name={"desc-7"}
                title={"Карточка 7: Описание"}
                lockedText={
                  "Доступ в стиралку октрыт на 24 часа с момента начала брони. Можно использовать зеленые ящики, но не забудьте их вернуть!"
                }
              >
                {(text7) => (
                  <Module header={text ?? ""} color={"blue"} number={"7"}>
                    {text7}
                  </Module>
                )}
              </InputWrapper>
            )}
          </InputWrapper>

          <InputWrapper
            name={"header-12"}
            title={"Карточка 7А: Заголовок"}
            lockedText={"Бинго!"}
          >
            {(text) => (
              <InputWrapper
                name={"desc-12"}
                title={"Карточка 7А: Описание"}
                lockedText={"Вы великолепны! Опрятны, свежи, чисты."}
              >
                {(text12) => (
                  <Module header={text ?? ""} color={"orange"} number={"8"}>
                    {text12}
                  </Module>
                )}
              </InputWrapper>
            )}
          </InputWrapper>

          <InputWrapper
            name={"header-8"}
            title={"Карточка 8: Заголовок"}
            lockedText={"В моей стирлке чужие вещи"}
          >
            {(text) => (
              <InputWrapper
                name={"desc-8"}
                title={"Карточка 8: Описание"}
                lockedText={
                  "Если в ваше время стираются не ваши вещи, включите быстрый отжим и вытащите их на стиралку."
                }
              >
                {(text8) => <Module header={text ?? ""}>{text8}</Module>}
              </InputWrapper>
            )}
          </InputWrapper>

          <InputWrapper
            name={"header-9"}
            title={"Карточка 9: Заголовок"}
            lockedText={"Убирайте за собой"}
          >
            {(text) => (
              <InputWrapper
                name={"desc-9"}
                title={"Карточка 9: Описание"}
                lockedText={
                  "Рассыпали порошок? Уберите тряпочкой. Не оставляйте пустые пакеты и коробки из-под порошка - есть мусорка."
                }
              >
                {(text9) => <Module header={text ?? ""}>{text9}</Module>}
              </InputWrapper>
            )}
          </InputWrapper>

          <InputWrapper
            name={"header-10"}
            title={"Карточка 10: Заголовок"}
            lockedText={"Купите мешок для стирки"}
          >
            {(text) => (
              <InputWrapper
                name={"desc-10"}
                title={"Карточка 10: Описание"}
                lockedText={
                  "Вещи не будут растягиваться, а стиралки дольше прослужат. Вещи с твердыми вставками, например, бюстгальтеры, можно только в мешках."
                }
              >
                {(text10) => <Module header={text ?? ""}>{text10}</Module>}
              </InputWrapper>
            )}
          </InputWrapper>

          <InputWrapper
            name={"header-11"}
            title={"Карточка 11: Заголовок"}
            lockedText={"Что-то сломалось?"}
          >
            {(text) => (
              <InputWrapper name={"desc-11"} title={"Отвественный: Описание"}>
                {(text11) => (
                  <Module header={text ?? ""}>
                    {text11}
                    <InputWrapper name={"img"} title={"Отвественный: Ссылка"}>
                      {(imgsrc) => (
                        <Img2
                          src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${imgsrc}`}
                        />
                      )}
                    </InputWrapper>
                    <>mipt.tech</>
                  </Module>
                )}
              </InputWrapper>
            )}
          </InputWrapper>
        </Container>
      </SimplePage>
    </Layout>
  );
};
