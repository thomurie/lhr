import {
  Divider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  IconButton,
  Text,
  Button,
} from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';

function ContactUs({ type }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {type === 'action' && (
        <Button
          display="inline-flex"
          fontSize={'sm'}
          fontWeight={600}
          color={'white'}
          bg={'blue.400'}
          href={'#'}
          _hover={{
            bg: 'blue.300',
          }}
          onClick={onOpen}
          isFullWidth
        >
          Contact Us
        </Button>
      )}
      {type === 'nav' && (
        <>
          <IconButton
            onClick={onOpen}
            display={{ base: 'inline-flex', md: 'none' }}
            aria-label="Search database"
            icon={<EmailIcon />}
          />
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'blue.400'}
            href={'#'}
            _hover={{
              bg: 'blue.300',
            }}
            onClick={onOpen}
          >
            Contact Us
          </Button>
        </>
      )}
      {type === 'footer' && (
        <Text
          _hover={{
            textDecoration: 'underline',
          }}
          onClick={onOpen}
        >
          Contact Us
        </Text>
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contact Us</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize={'lg'}>Email</Text>
            <Text>crownkingrealestate@gmail.com</Text>
            <Divider mt={2} mb={2} />
            <Text fontSize={'lg'}>Cindy King</Text>
            <Text>801-718-5464 </Text>
            <Text fontSize={'sm'}>(Call or Text)</Text>
            <Divider mt={2} mb={2} />
            <Text fontSize={'lg'}>Terry King</Text>
            <Text>801-946-4225 </Text>
            <Text fontSize={'sm'}>(Call or Text)</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ContactUs;

/**To use this component
 * paste - const { isOpen, onOpen, onClose } = useDisclosure();
 *
 * update the button to <Button onClick={onOpen}>Open Modal</Button>
 */
