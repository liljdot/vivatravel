import { Body, Button, Container, Head, Html, Img, Link, Preview, Section, Tailwind, Text } from "react-email"
// import emailTheme from "./email.css?raw"
// import logo from "@/public/assets/images/footer-logo.png"

interface Props {
    name: string
    email: string
    message: string
}

const Welcome = ({ email, message, name }: Props) => {

    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
    const emailTheme = `@theme {
  --color-primary: #0B1F3A;
  --color-primary-content: #FFFFFF;

  --color-secondary: #D4A72C;
  --color-secondary-content: #FFFFFF;

  --color-accent: #AC8417;
  --color-accent-content: #FFFFFF;

  --color-base-100: #EDEEF0;
  --color-base-200: #272727;
  --color-base-300: #303030;
  --color-base-content: #FFFFFF;

  --color-neutral: #F4F6F8;
  --color-neutral-content: #000000;

  --color-info: #4B4B4B;
}`

    return (
        <Html>
            <Head />
            {/* <>
                <img
                    src={`${baseUrl}/assets/images/footer-logo.png`}
                    alt="bts"
                    className="size-16"
                />
            </> */}
            <Tailwind theme={emailTheme}>
                <Body className="bg-white text-[#24292e] font-github">
                    <Preview>
                        A message from {name}
                    </Preview>
                    <Container className="max-w-120 mx-auto my-0 pt-5 pb-12 px-0">
                        <Img
                            src={`${baseUrl}/assets/images/footer-logo.png`}
                            // width="32"
                            // height="32"
                            alt="VTS"
                            className="mx-auto"
                        />

                        <Text className="text-2xl leading-tight">
                            A message from <strong>@{name}</strong> (<Link href={`mailto:${email}`}>{email}</Link> ) was sent on VTS web
                        </Text>

                        <Section className="p-6 border border-solid border-[#dedede] rounded-[5px] text-center">
                            <Text className="mb-2.5 mt-0 text-left">
                                {message}
                            </Text>

                            <Link href={`mailto:${email}?subject=VTS%20Reply`} className="text-sm bg-primary text-primary-content leading-normal rounded-lg py-3 px-6">
                                Reply
                            </Link>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}

export default Welcome