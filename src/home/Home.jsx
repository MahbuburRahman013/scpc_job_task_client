import { Card, CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import useAllHouses from '../hooks/useAllHouses';

const Home = () => {
    const [data, isLoading] = useAllHouses()
    // console.log(data)

    return (
        <div className='container mx-auto grid grid-cols-3 gap-12 my-10'>
            {isLoading ? 'Loading' :
                data.map(house => <div key={house._id}>
                    <Card maxW='sm'>
                        <CardBody>
                            <Image
                                className='h-52 w-full'
                                src={house?.picture}
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>{house?.name}</Heading>
                                <Text>{house?.description}</Text>
                                <div className='flex justify-between'>
                                    <Text fontSize='md'>
                                    Bedrooms: <span className='text-gray-800'>{house?.bedrooms}</span>
                                    </Text>
                                    <Text fontSize='md'>
                                    Bathrooms: <span className='text-gray-800'>{house?.bathrooms}</span>

                                    </Text>
                                </div>
                                <div className='flex justify-between'>
                                    <Text fontSize='md'>
                                    city: <span className='text-gray-800'>{house?.city}, Address:{house?.address}</span>
                                    </Text>
                                </div>
                                <div className='flex justify-between'>
                                    <Text fontSize='md'>
                                        Rent: <span className='text-blue-600'>{house?.rent_per_month}</span>
                                    </Text>
                                    <Text fontSize='md'>
                                        Size: <span className='text-gray-600'>{house?.room_size}</span>

                                    </Text>
                                </div>
                                <div className='flex justify-between'>
                                    <Text fontSize='md'>
                                        Phone No: <span className='text-blue-600'>{house?.phone_number}</span>
                                    </Text>
                                    <Text fontSize='md'>
                                        Available: <span className='text-gray-600'>{house?.availability_date}</span>

                                    </Text>
                                </div>
                            </Stack>
                        </CardBody>
                    </Card>

                </div>)
            }
        </div>
    );
};

export default Home;