import Image from 'next/image'
import React from 'react'

const about = () => {
    return (
        <div>
            <>
                <section className="text-gray-600 body-font my-10">
                    <div className="container px-5 py-24 mx-auto flex flex-col">
                        <div className="lg:w-4/6 mx-auto">
                            <div className="rounded-lg h-1/2 overflow-hidden">
                                <Image src={'/background.jpg'} height={500} width={1200} alt=""></Image>
                            </div>
                            <div className="flex flex-col sm:flex-row mt-10  bg-gradient-to-r from-slate-50 via-green-100 to-white">
                                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-12 py-16 my-20">
                                    <div className="w-3/4 h-20  inline-flex items-center justify-center py-10  text-gray-400">
                                        <Image src={'/ArifAlvi.png'} height={800} width={500} alt="" ></Image>
                                    </div>
                                    <div className="flex flex-col items-center text-center justify-center sm:my-10">
                                        <h2 className="font-medium title-font mt-4 text-gray-900 text-4xl">Dr. Arif Alvi</h2>
                                        <div className="w-3/4 h-1  bg-gradient-to-r my-7 from-pink-500 to-yellow-500  rounded "></div>
                                        <p className="text-base">President of the Islamic Republic of Pakistan</p>
                                    </div>
                                </div>
                                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-red-200   border-gradient-to-r  from-pink-500 to-yellow-500 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                    <p className="leading-relaxed text-base mb-4">Dr. Arif Alvi was sworn in as the 13th President of Islamic Republic of Pakistan on 9th September 2018.</p>
                                    <p className="leading-relaxed text-base mb-4">Dr. Arif Alvi was born in 1949 and completed his early education in Karachi. He did his Bachelor of Dental Surgery (BDS) from De’ Montmorency College of Dentistry, Lahore where he was declared the “Best Graduate”. He completed his Masters of Science in the field of Prosthodontics from University of Michigan (1975) and in Orthodontics from University of Pacific, San Francisco (1982). He was awarded fellowship ‘Diplomatic American Board of Orthodontists (1995)’.</p>
                                    <p className="leading-relaxed text-base mb-4">President Dr. Arif Alvi has been a renowned professional and has held many important positions in the field of Dentistry. He remained Dean of Orthodontics, College of Physicians and Surgeons of Pakistan, President, Pakistan Dental Association (1997-2001), Pakistan Association of Orthodontists (2005), Asia Pacific Dental Federation (2006-07) and Councilor of the World Dental Federation (2007-2013). Through his sheer hard work in the World Dental Federation, he was able to get the declaration of 20th March as World Oral Health Day. He is also an author of a book, theses, and many articles.</p>
                                    <p className="leading-relaxed text-base mb-4">Dr. Arif Alvi’s political career commenced with his pro-democracy struggle against the dictatorship of General Ayub Khan. He is a founding member of Pakistan Tehreek-e-Insaf (PTI) that came into being in 1996. He remained a member of the PTI’s Central Executive Committee since its inception and has held the offices of PTI President of Sindh (1997-2001), Central Vice President (2001-2006) and Secretary General (2006-2013). In line with Constitution of Pakistan, he resigned from all the positions of PTI before assuming the prestigious office of the President.</p>
                                    <p className="leading-relaxed text-base mb-4">During his tenure as the Secretary General of the party, Dr. Arif Alvi introduced social media platform in the politics of Pakistan. He was instrumental in holding intra-party election (2012-2013) and enabled millions of party members to digitally participate in the election process. He was elected as member of National Assembly from Karachi in 2013 and 2018 and was instrumental in drafting and the passage of many bills including one on Alternate Dispute Resolution. He also chaired the sub-committee of EVM’s, Digital Identification of voters and voting of overseas Pakistanis. The latter has finally come to fruition. Dr. Arif Alvi has keen interest in education and health sectors. Provision of basic facilities to the common man and uplifting the country’s image are very close to his heart. He considers people of Pakistan as the most precious asset and, therefore, accords special focus to human resource development in the country. He is happily married and has four children.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </>
        </div>
    )
}

export default about
