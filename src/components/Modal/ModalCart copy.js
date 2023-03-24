// import { Button, Container, Flex, Heading, Image, Text } from '@chakra-ui/react';
// import Modal from 'react-modal';
// import React, { useContext } from 'react';
// import { GlobalContext } from '../../contexts/GlobalContext';
// import { priceFormatter } from '../../util/priceFormatter';

// export const ModalCart = (props) => {

//     const context = useContext(GlobalContext)
//     const { isOpen, setIsOpen, totalPrice } = context
//     const { coffee } = props

//     function closeModal() {
//         setIsOpen(false)
//     }

//     const customStyle = {
//         content: {
//             top: '42%',
//             right: '48%',
//             marginRight: '-50%',
//             transform: 'translate(-50%, -50%)',
//             border: 'none',
//             width: '20rem',
//             height: '30rem',
//             display: 'flex',
//             flexDirection: 'row',
//             justifyContent: 'center',
//             alignItems: 'flex-start'
//         },
//         overlay: {
//             backgroundColor: 'rgba(0, 0, 0, 0.01)',
//             zIndex: '1000'

//         }
//     }

//     return (
//         <>
//             <Modal
//                 isOpen={isOpen}
//                 onRequestClose={closeModal}
//                 style={customStyle}
//             >
//                 <Flex
//                     //border= '2px solid blue'
//                     justifyContent='center'
//                     alignItems='center'
//                     onClick={closeModal}
//                     position='absolute'
//                 >

//                     <Image src={coffee.image} width='3rem' height='3rem' />
//                     <Flex
//                         //border='2px solid green'
//                         flexDirection='column'
//                         gap='1rem'
//                     >
//                         <Flex flexDirection='column' gap='0.5rem'>
//                             <Heading fontSize='1rem' fontWeight='700' fontFamily='Baloo 2' textAlign='center'> {coffee.name}</Heading>
//                             <Text fontSize='0.8rem' fontWeight='400' fontFamily='Roboto' textAlign='center' width='15rem'>{coffee.description}</Text>
//                         </Flex>

//                         <Flex bottom='0' gap='0.5rem' width='15rem'>
//                             <Text fontSize='0.8rem' fontWeight='700' fontFamily='Roboto' paddingLeft='0.6rem'>Quantidade:</Text>
//                             <Text fontSize='0.8rem' fontWeight='400' fontFamily='Roboto'>1{coffee.quantity}</Text>
//                         </Flex>
//                         <hr></hr>
//                     </Flex>
//                 </Flex>
//                 <Flex
//                     //border='2px solid green'
//                     flexDirection='column'
//                     alignSelf='flex-end'
//                     textAlign='right'
//                     gap='1rem'
//                 >
//                     <Flex
//                     gap='1rem'
//                     >
//                         <Text
//                             //border='2px solid red'
//                             //width='30rem'
//                             fontWeight='700'
//                             fontFamily='Baloo 2'
//                         >Valor Total sem frete:</Text>
//                         <Text
//                             //border='2px solid blue'
//                             //width='30rem'
//                             fontWeight='700'
//                             fontFamily='Baloo 2'
//                         >R${priceFormatter.format(totalPrice)}
//                         </Text>
//                     </Flex>
//                     <Button
//                         marginLeft='1.5rem'
//                         width='12rem'
//                         bgColor='#F1E9C9'
//                         color='#C47F17'
//                         justifyContent='center'
//                         alignItems='center'
//                     >Ver Carrinho</Button>
//                 </Flex>

//             </Modal>
//         </>
//     )
// }