import { Metadata } from 'next';
import { MdPrivacyTip } from 'react-icons/md';
import * as motion from '@/lib/motion';
import ProgressBar from '@/components/ProgressBar';

export const metadata: Metadata =
{
    title: 'Privacy Policy - Seiiccubus',
};

const page = () =>
{
    return (

        <div className='xl:px-72 sm:px-20 px-8 mx-auto sm:text-justify sm:text-base text-sm'>

            <ProgressBar />

            <motion.div initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ ease: "easeOut" }}>
                <MdPrivacyTip className='heading-icon xl:mt-16 mt-8' />
            </motion.div>

            <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ ease: "easeOut" }}>
                <h1 className='heading mt-2'>Privacy Policy</h1>
            </motion.div>

            <motion.div initial={{ x:50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ ease: "easeOut" }}>
                <h2 className='info-sub-heading'>Last updated <strong>July 05, 2023</strong></h2>
            </motion.div>

            <motion.section id='intro' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ ease: "easeOut" }}>

                <p className='mt-8 opacity-90'>This privacy notice for Seiiccubus ('<strong>I</strong>', '<strong>me</strong>', or '<strong>my</strong>'), describes how and why I might collect, store, use, and/or share ('<strong>process</strong>') your information when you use my services ('<strong>Services</strong>'), such as when you:</p>

                <ul className='mt-8 ml-10 opacity-90 '>
                    <li className='sm:mb-0 mb-4'>• Visit my website at <a href='https://seiiccubus.com' className='gradient-text'>seiiccubus.com</a>, or any website of mine that links to this privacy notice;</li>
                    <li>• Engage with me in other related ways, including any sales, marketing, or events.</li>
                </ul>

                <p className='mt-8 opacity-90'><strong>Questions or concerns?</strong> Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with my policies and practices, please do not use my Services. If you still have any questions or concerns, please contact me at <a href='mailto://maya@seiiccubus.com' className='gradient-text'>maya@seiiccubus.com</a>.</p>

            </motion.section>

            <motion.section id='summary' className='md:pt-12 pt-8'  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ ease: "easeOut" }}>

                <h2 className='sub-heading'>Summary of Key Points</h2>

                <p className='mt-8 opacity-90 font-semibold italic'>This summary provides key points from my privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using my <a href='#toc' className='gradient-text'>table of contents</a> below to find the section you are looking for.</p>

                <p className='mt-8 opacity-90'><strong>What personal information do I process?</strong> When you visit, use, or navigate my Services, I may process personal information depending on how you interact with me and the Services, the choices you make, and the products and features you use. Learn more about <a href='#infocollect' className='gradient-text'>personal information you disclose to me</a>.</p>

                <p className='mt-8 opacity-90'><strong>Do I process any sensitive personal information?</strong> I do not process sensitive personal information.</p>

                <p className='mt-8 opacity-90'><strong>Do I receive any information from third parties?</strong> I do not receive any information from third parties.</p>

                <p className='mt-8 opacity-90'><strong>How do I process your information?</strong> I process your information to provide, improve, and administer my Services, communicate with you, for security and fraud prevention, and to comply with law. I may also process your information for other purposes with your consent. I process your information only when I have a valid legal reason to do so. Learn more about <a href='#infouse' className='gradient-text'>how I process your information</a>.</p>

                <p className='mt-8 opacity-90'><strong>In what situations and with which parties do I share personal information?</strong> I may share information in specific situations and with specific third parties. Learn more about <a href='#whoshare' className='gradient-text'>when and with whom I share your personal information</a>.</p>

                <p className='mt-8 opacity-90'><strong>How do I keep your information safe?</strong> I have organisational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so I cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat my security and improperly collect, access, steal, or modify your information. Learn more about <a href='#infosafe' className='gradient-text'>how I keep your information safe</a>.</p>

                <p className='mt-8 opacity-90'><strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about <a href='#rights' className='gradient-text'>your privacy rights</a>.</p>

                <p className='mt-8 opacity-90'><strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by visiting <a href='https://seiiccubus.com/contact' className='gradient-text'>seiiccubus.com/contact</a>, or by contacting me. I will consider and act upon any request in accordance with applicable data protection laws.</p>

                <p className='mt-8 opacity-90'>Want to learn more about what I do with any information I collect? <a href='#toc' className='gradient-text'>Review the privacy notice in full</a>.</p>

            </motion.section>

            <motion.section id='toc' className='md:pt-12 pt-8' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ ease: "easeOut" }}>

                <h2 className='sub-heading'>Table of Contents</h2>

                <ol className='mt-8 opacity-90 gradient-text w-fit'>
                    <li className='sm:mb-0 mb-4'><a href='#infocollect'>1. What Information Do I Collect?</a></li>
                    <li className='sm:mb-0 mb-4'><a href='#infouse'>2. How Do I Process Your Information?</a></li>
                    <li className='sm:mb-0 mb-4'><a href='#legalbases'>3. What Legal Bases Do I Rely On to Process Your Personal Information?</a></li>
                    <li className='sm:mb-0 mb-4'><a href='#whoshare'>4. When and With Whom Do I Share Your Personal Information?</a></li>
                    <li className='sm:mb-0 mb-4'><a href='#cookies'>5. Do I Use Cookies and Other Tracking Technologies?</a></li>
                    <li className='sm:mb-0 mb-4'><a href='#inforetain'>6. How Long Do I Keep Your Information?</a></li>
                    <li className='sm:mb-0 mb-4'><a href='#infosafe'>7. How Do I Keep Your Information Safe?</a></li>
                    <li className='sm:mb-0 mb-4'><a href='#infominors'>8. Do I Collect Information From Minors?</a></li>
                    <li className='sm:mb-0 mb-4'><a href='#rights'>9. What Are Your Privacy Rights?</a></li>
                    <li className='sm:mb-0 mb-4'><a href='#dnt'>10. Controls for Do-Not-Track Features</a></li>
                    <li className='sm:mb-0 mb-4'><a href='#california'>11. Do California Residents Have Specific Privacy Rights?</a></li>
                    <li className='sm:mb-0 mb-4'><a href='#updates'>12. Do I Make Updates To This Privacy Policy?</a></li>
                    <li className='sm:mb-0 mb-4'><a href='#contact'>13. How Can You Contact Me About This Privacy Policy?</a></li>
                    <li className='sm:mb-0 mb-4'><a href='#request'>14. How Can You Review, Update, or Delete the Data I Collect From You?</a></li>
                </ol>

            </motion.section>

            <motion.section id='infocollect' className='md:pt-12 pt-8' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ ease: "easeOut" }}>

                <h2 className='sub-heading'>1. What Information Do I Collect?</h2>

                <p className='mt-8 opacity-60 italic'><strong>In short:</strong> I collect personal information that you provide to me.</p>

                <p className='mt-8 opacity-90'>I collect personal information that you voluntarily provide to me when you express an interest in obtaining information about me or my products and Services, when you participate in activities on the Services, or otherwise when you contact me.</p>

                <p className='mt-8 opacity-90'><strong>Personal information provided by you:</strong> the personal information that I collect depends on the context of your interactions with me and the Services, the choices you make, and the products and features you use. The personal information I collect may include the following:</p>

                <ul className='mt-8 ml-10 opacity-90 '>
                    <li>• Full name;</li>
                    <li>• E-mail address.</li>
                </ul>

                <p className='mt-8 opacity-90'><strong>Sensitive information:</strong> I do not process sensitive information.</p>

                
                <p className='mt-8 opacity-90'>All personal information that you provide to me must be true, complete, and accurate, and you must notify me of any changes to such personal information.</p>

            </motion.section>

            <motion.section id='infouse' className='md:pt-12 pt-8' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ ease: "easeOut" }}>

                <h2 className='sub-heading'>2. How Do I Process Your Information?</h2>

                <p className='mt-8 opacity-60 italic'><strong>In short:</strong> I process your information to provide, improve, and administer my Services, communicate with you, for security and fraud prevention, and to comply with law. I may also process your information for other purposes with your consent.</p>

                <p className='mt-8 opacity-90'>I process your personal information for a variety of reasons, depending on how you interact with my Services, including:</p>

                <ul className='mt-8 ml-10 opacity-90 '>
                    <li className='mb-3'>• <strong>To deliver and facilitate delivery of services to the user.</strong> I may process your information to provide you with the requested service;</li>
                    <li className='mb-3'>• <strong>To respond to user inquiries/offer support to users.</strong> I may process your information to respond to your inquiries and solve any potential issues you might have with the requested service;</li>
                    <li className='mb-3'>• <strong>To fulfil and manage your orders.</strong> I may process your information to fulfil and manage your orders, payments, returns, and exchanges made through the Services;</li>
                    <li>• <strong>To save or protect an individual's vital interest.</strong> I may process your information when necessary to save or protect an individual's vital interest, such as to prevent harm.</li>
                </ul>


            </motion.section>

            <motion.section id='legalbases' className='md:pt-12 pt-8' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ ease: "easeOut" }}>

                <h2 className='sub-heading'>3. What Legal Bases Do I Rely On to Process Your Information?</h2>

                <p className='mt-8 opacity-60 italic'><strong>In short:</strong> I only process your personal information when I believe it is necessary and I have a valid legal reason (i.e. legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfil my contractual obligations, to protect your rights, or to fulfil my legitimate business interests.</p>

                <p className='mt-8 opacity-90 font-bold italic'>If you are located in the UK / EU:</p>

                <p className='mt-8 opacity-90'>The General Data Protection Regulation (GDPR) and UK GDPR require me to explain the valid legal bases I rely on in order to process your personal information. As such, I may rely on the following legal bases to process your personal information:</p>

                <ul className='mt-8 ml-10 opacity-90 '>
                    <li className='mb-3'>• <strong>Consent</strong> I may process your information if you have given me permission (i.e. consent) to use your personal information for a specific purpose. You can withdraw your consent at any time. Learn more about <a href='#withdrawconsent' className='gradient-text'>withdrawing your consent</a>;</li>
                    <li className='mb-3'>• <strong>Performance of a contract.</strong> I may process your personal information when I believe it is necessary to fulfil my contractual obligations to you, including providing my Services or at your request prior to entering into a contract with you;</li>
                    <li className='mb-3'>• <strong>Legal obligations.</strong>  I may process your information where I believe it is necessary for compliance with my legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend my legal rights, or disclose your information as evidence in litigation in which I am involved;</li>
                    <li>• <strong>Vital interests.</strong> I may process your information where I believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.</li>
                </ul>

                <p className='mt-8 opacity-90 font-bold italic'>If you are located in Canada:</p>

                <p className='mt-8 opacity-90'>I may process your information if you have given me specific permission (i.e. express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e. implied consent). You can <a href='#withdrawconsent' className='gradient-text'>withdraw your consent</a> at any time. In some exceptional cases, I may be legally permitted under applicable law to process your information without your consent, including, for example:</p>

                <ul className='mt-8 ml-10 opacity-90 '>
                    <li className='mb-3'>• If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way;</li>
                    <li className='mb-3'>• For investigations and fraud detection and prevention;</li>
                    <li className='mb-3'>• For business transactions provided certain conditions are met;</li>
                    <li className='mb-3'>• If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim;</li>
                    <li className='mb-3'>• For identifying injured, ill, or deceased persons and communicating with next of kin;</li>
                    <li className='mb-3'>• If I have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse;</li>
                    <li className='mb-3'>• If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province;</li>
                    <li className='mb-3'>• If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records;</li>
                    <li className='mb-3'>• If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced;</li>
                    <li className='mb-3'>• If the collection is solely for journalistic, artistic, or literary purposes;</li>
                    <li>• If the information is publicly available and is specified by the regulations.</li>
                </ul>

            </motion.section>

            <motion.section id='whoshare' className='md:pt-12 pt-8' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ ease: "easeOut" }}>

                <h2 className='sub-heading'>4. When and With Whom Do I Share Your Personal Information?</h2>

                <p className='mt-8 opacity-60 italic'><strong>In short:</strong> I may share information in specific situations described in this section and/or with the following third parties.</p>

                <p className='mt-8 opacity-90'>I may need to share your personal information in the following situations:</p>

                <ul className='mt-8 ml-10 opacity-90 '>
                    <li>• <strong>Business transfers.</strong> I may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of my business to another company.
                    </li>
                </ul>

            </motion.section>

            <motion.section id='cookies' className='md:pt-12 pt-8' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ ease: "easeOut" }}>

                <h2 className='sub-heading'>5. Do I Use Cookies and Other Tracking Technologies?</h2>

                <p className='mt-8 opacity-60 italic'><strong>In short:</strong> I may use cookies and other tracking technologies to collect and store your information.</p>

                <p className='mt-8 opacity-90'>I may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how I use such technologies and how you can refuse certain cookies is set out in my <a href='/cookies' className='gradient-text'>Cookie Policy</a>.</p>

            </motion.section>

            <motion.section id='inforetain' className='md:pt-12 pt-8' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ ease: "easeOut" }}>

                <h2 className='sub-heading'>6. How Long Do I Keep Your Information?</h2>

                <p className='mt-8 opacity-60 italic'><strong>In short:</strong> I keep your information for as long as necessary to fulfil the purposes outlined in this privacy notice unless otherwise required by law.</p>

                <p className='mt-8 opacity-90'>I will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).</p>

                <p className='mt-8 opacity-90'>When I have no ongoing legitimate business need to process your personal information, I will either delete or anonymise such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then I will securely store your personal information and isolate it from any further processing until deletion is possible.</p>

            </motion.section>

            <motion.section id='infosafe' className='md:pt-12 pt-8' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ ease: "easeOut" }}>

                <h2 className='sub-heading'>7. How Do I Keep Your Information Safe?</h2>

                <p className='mt-8 opacity-60 italic'><strong>In short:</strong> I aim to protect your personal information through a system of organisational and technical security measures.</p>

                <p className='mt-8 opacity-90'>I have implemented appropriate and reasonable technical and organisational security measures designed to protect the security of any personal information I process. However, despite my safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so I cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat my security and improperly collect, access, steal, or modify your information. Although I will do my best to protect your personal information, transmission of personal information to and from my Services is at your own risk. You should only access the Services within a secure environment.</p>

            </motion.section>

            <motion.section id='infominors' className='md:pt-12 pt-8' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ ease: "easeOut" }}>

                <h2 className='sub-heading'>8. Do I Collect Information From Minors?</h2>

                <p className='mt-8 opacity-60 italic'><strong>In short:</strong> I do not knowingly collect data from or market to children under 18 years of age.</p>

                <p className='mt-8 opacity-90'>I do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Services. If I learn that personal information from users less than 18 years of age has been collected, I will take reasonable measures to promptly delete such data from my records. If you become aware of any data I may have collected from children under age 18, please contact me at <a href='mailto://maya@seiiccubus.com' className='gradient-text'>maya@seiiccubus.com</a>.</p>

            </motion.section>

            <motion.section id='rights' className='md:pt-12 pt-8' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ ease: "easeOut" }}>

                <h2 className='sub-heading'>9. What Are Your Privacy Rights?</h2>

                <p className='mt-8 opacity-60 italic'><strong>In short:</strong> In some regions, such as the European Economic Area (EEA), United Kingdom (UK), and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.</p>

                <p className='mt-8 opacity-90'>In some regions (like the EEA, UK, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting me by using the contact details provided in the section '<a href='#contact' className='gradient-text'>How Can You Contact Me About This Privacy Policy?</a>' below.</p>

                <p className='mt-8 opacity-90'>I will consider and act upon any request in accordance with applicable data protection laws.</p>

                <p className='mt-8 opacity-90'>If you are located in the EEA or UK and you believe I am unlawfully processing your personal information, you also have the right to complain to your <a href='https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm' className='gradient-text'>Member State data protection authority</a> or <a href='https://ico.org.uk/make-a-complaint/data-protection-complaints/data-protection-complaints/' className='gradient-text'>UK data protection authority</a>.</p>

                <p className='mt-8 opacity-90'>If you are located in Switzerland, you may contact the <a href='https://www.edoeb.admin.ch/edoeb/en/home.html' className='gradient-text'>Federal Data Protection and Information Commissioner</a>.</p>

                <p className='mt-8 opacity-90'><strong>Withdrawing your consent:</strong> If I am relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting me by using the contact details provided in the section '<a href='#contact' className='gradient-text'>How Can You Contact Me About This Privacy Policy?</a>' below. However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</p>

                <p className='mt-8 opacity-90'><strong>Cookies and similar technologies:</strong> Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of my Services. You may also opt out of interest-based advertising by advertisers on my Services. For further information, please see my <a href='/cookies' className='gradient-text'>Cookie Policy</a>.</p>

                <p className='mt-8 opacity-90'>If you have questions or comments about your privacy rights, you may email me at <a href='mailto://maya@seiiccubus.com' className='gradient-text'>maya@seiiccubus.com</a>.</p>

            </motion.section>

            <motion.section id='dnt' className='md:pt-12 pt-8' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ ease: "easeOut" }}>

                <h2 className='sub-heading'>10. Controls for Do-Not-Track Features</h2>

                <p className='mt-8 opacity-90'>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ('DNT') feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognising and implementing DNT signals has been finalised. As such, I do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that I must follow in the future, I will inform you about that practice in a revised version of this privacy notice.</p>

            </motion.section>

            <motion.section id='california' className='md:pt-12 pt-8' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ ease: "easeOut" }}>

                <h2 className='sub-heading'>11. Do California Residents Have Specific Privacy Rights?</h2>

                <p className='mt-8 opacity-60 italic'><strong>In short:</strong> Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</p>

                <p className='mt-8 opacity-90'>California Civil Code Section 1798.83, also known as the 'Shine The Light' law, permits my users who are California residents to request and obtain from me, once a year and free of charge, information about categories of personal information (if any) I disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which I shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to me using the contact information provided below.</p>

                <p className='mt-8 opacity-90'>If you are under 18 years of age, reside in California, and have a registered account with Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact me using the contact information provided below and include the email address associated with your account and a statement that you reside in California. I will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all my systems (e.g. backups, etc.).</p>

            </motion.section>

            <motion.section id='updates' className='md:pt-12 pt-8' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ ease: "easeOut" }}>

                <h2 className='sub-heading'>12. Do I Make Updates To This Privacy Policy?</h2>

                <p className='mt-8 opacity-60 italic'><strong>In short:</strong> Yes, I will update this notice as necessary to stay compliant with relevant laws.</p>

                <p className='mt-8 opacity-90'>I may update this privacy notice from time to time. The updated version will be indicated by an updated 'Revised' date and the updated version will be effective as soon as it is accessible. If I make material changes to this privacy notice, I may notify you either by prominently posting a notice of such changes or by directly sending you a notification. I encourage you to review this privacy notice frequently to be informed of how I am protecting your information.</p>

            </motion.section>

            <motion.section id='contact' className='md:pt-12 pt-8' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ ease: "easeOut" }}>

                <h2 className='sub-heading'>13. How Can You Contact Me About This Privacy Policy?</h2>

                <p className='mt-8 opacity-90'>If you have questions or comments about this notice, you may email me at <a href='mailto://maya@seiiccubus.com' className='gradient-text'>maya@seiiccubus.com</a>.</p>

            </motion.section>

            <motion.section id='request' className='md:pt-12 pt-8' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ ease: "easeOut" }}>

                <h2 className='sub-heading'>14. How Can You Review, Update, or Delete the Data I Collect From You?</h2>

                <p className='mt-8 opacity-90'>Based on the applicable laws of your country, you may have the right to request access to the personal information I collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please visit: <a href='https://seiiccubus.com/contact' className='gradient-text'>seiiccubus.com/contact</a>.</p>

            </motion.section>

        </div>

    )
}

export default page;