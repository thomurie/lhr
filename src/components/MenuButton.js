import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Link,
} from '@chakra-ui/react';
import { Link as RLink } from 'react-router-dom';
import { useRef } from 'react';

function MenuButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const menuLabels = [
    { label: 'Home', href: '/' },
    { label: 'Location', href: '/location' },
    { label: 'HOA', href: '/hoa' },
    { label: 'About Us', href: '/about' },
  ];
  return (
    <>
      <Button
        display={{ base: 'none', lg: 'inline-flex' }}
        fontSize={'sm'}
        fontWeight={600}
        variant="ghost"
        ref={btnRef}
        onClick={onOpen}
      >
        Menu
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            {menuLabels.map(l => (
              <>
                <Link
                  as={RLink}
                  to={l.href}
                  mb="4"
                  fontSize={'sm'}
                  fontWeight={600}
                  variant="ghost"
                  onClick={onClose}
                >
                  {l.label}
                </Link>
                <br />
              </>
            ))}
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default MenuButton;
