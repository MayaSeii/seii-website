import { Metadata } from "next";
import { FaCookie } from "react-icons/fa6";
import * as motion from '@/lib/motion';
import ProgressBar from '@/components/ProgressBar';

export const metadata: Metadata =
{
    title: 'Cookie Policy - Seiiccubus',
};

const page = () =>
{
    return (

        <div className='xl:px-72 sm:px-20 px-8 mx-auto mb-16 sm:text-justify sm:text-base text-sm'>
            
            <ProgressBar />

            <motion.div initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ ease: "easeOut" }}>
            <FaCookie className='heading-icon xl:mt-16 md:mt-12 mt-8' />
            </motion.div>

            <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ ease: "easeOut" }}>
                <h1 className='heading mt-2'>Cookie Policy</h1>
            </motion.div>

            <motion.div initial={{ x:50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ ease: "easeOut" }}>
                <h2 className='info-sub-heading'>Last updated <strong>July 05, 2023</strong></h2>
            </motion.div>

            <motion.section id='intro' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ ease: "easeOut" }}>

                <p className='mt-8 opacity-90'>This cookie policy explains how Seiiccubus ('<strong>I</strong>', '<strong>me</strong>', or '<strong>my</strong>') uses cookies and similar technologies to recognize you when you visit my website at <a href='https://seiiccubus.com' className='gradient-text'>seiiccubus.com</a> ("Website"). It explains what these technologies are and why I use them, as well as your rights to control our use my them.</p>

                <p className='mt-8 opacity-90'>In some cases, I may use cookies to collect personal information, or information that becomes personal information if I combine it with other information.</p>

            </motion.section>

            <motion.section id='infocookies' className='md:pt-12 pt-8' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ ease: "easeOut" }}>

                <h2 className='sub-heading'>What Are Cookies?</h2>

                <p className='mt-8 opacity-90'>Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>

                <p className='mt-8 opacity-90'>Cookies set by the website owner (in this case, Seiiccubus) are called "first-party cookies." Cookies set by parties other than the website owner are called "third-party cookies." Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics). The parties that set these third-party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.</p>

            </motion.section>

            <motion.section id='infowhy' className='md:pt-12 pt-8' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ ease: "easeOut" }}>

                <h2 className='sub-heading'>Why Do I Use Cookies?</h2>

                <p className='mt-8 opacity-90'>I use first- and third-party cookies for several reasons. Some cookies are required for technical reasons in order for my Website to operate, and I refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable me to track and target the interests of my users to enhance the experience on my Online Properties. Third parties serve cookies through my Website for advertising, analytics, and other purposes. This is described in more detail below.</p>

            </motion.section>

            <motion.section id='infocontrol' className='md:pt-12 pt-8' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ ease: "easeOut" }}>

                <h2 className='sub-heading'>How Can You Control Cookies?</h2>

                <p className='mt-8 opacity-90'>You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.</p>

                <p className='mt-8 opacity-90'>The Cookie Consent Manager can be found on my website. If you choose to reject cookies, you may still use my website though your access to some functionality and areas of my website may be restricted. You may also set or amend your web browser controls to accept or refuse cookies.</p>

                <p className='mt-8 opacity-90'>You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.</p>

            </motion.section>

            <motion.section id='infobrowser' className='md:pt-12 pt-8' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ ease: "easeOut" }}>

                <h2 className='sub-heading'>How Can You Control Cookies On Your Browser?</h2>

                <p className='mt-8 opacity-90'>As the means by which you can refuse cookies through your web browser controls vary from browser to browser, you should visit your browser's help menu for more information. The following is information about how to manage cookies on the most popular browsers:</p>

                <ul className='mt-8 ml-10 opacity-90 '>
                    <li>• <a href='https://support.google.com/chrome/answer/95647#zippy=%2Callow-or-block-cookies' className='gradient-text'>Chrome</a>;</li>
                    <li>• <a href='https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d' className='gradient-text'>Firefox</a>;</li>
                    <li>• <a href='https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&redirectlocale=en-US' className='gradient-text'>Internet Explorer</a>;</li>
                    <li>• <a href='https://support.apple.com/en-ie/guide/safari/sfri11471/mac' className='gradient-text'>Safari</a>;</li>
                    <li>• <a href='https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd' className='gradient-text'>Edge</a>;</li>
                    <li>• <a href='https://help.opera.com/en/latest/web-preferences/' className='gradient-text'>Opera</a>.</li>
                </ul>

                <p className='mt-8 opacity-90'>In addition, most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit:</p>

                <ul className='mt-8 ml-10 opacity-90 '>
                    <li>• <a href='http://www.aboutads.info/choices/' className='gradient-text'>Digital Advertising Alliance</a>;</li>
                    <li>• <a href='https://youradchoices.ca/' className='gradient-text'>Digital Advertising Alliance of Canada</a>;</li>
                    <li>• <a href='http://www.youronlinechoices.com/' className='gradient-text'>European Interactive Digital Advertising Alliance</a>.</li>
                </ul>

            </motion.section>

            <motion.section id='infotracking' className='md:pt-12 pt-8' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ ease: "easeOut" }}>

                <h2 className='sub-heading'>What About Other Tracking Technologies, Like Web Beacons?</h2>

                <p className='mt-8 opacity-90'>Cookies are not the only way to recognize or track visitors to a website. I may use other, similar technologies from time to time, like web beacons (sometimes called "tracking pixels" or "clear gifs"). These are tiny graphics files that contain a unique identifier that enables me to recognize when someone has visited my Website or opened an email including them. This allows me, for example, to monitor the traffic patterns of users from one page within a website to another, to deliver or communicate with cookies, to understand whether you have come to the Website from an online advertisement displayed on a third-party website, to improve site performance, and to measure the success of email marketing campaigns. In many instances, these technologies are reliant on cookies to function properly, and so declining cookies will impair their functioning.</p>

            </motion.section>

            <motion.section id='infoads' className='md:pt-12 pt-8' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ ease: "easeOut" }}>

                <h2 className='sub-heading8'>Do I Serve Targeted Advertising?</h2>

                <p className='mt-8 opacity-90'>This website does not serve any kind of advertising from third-parties.</p>

            </motion.section>

            <motion.section id='infoupdate' className='md:pt-12 pt-8' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ ease: "easeOut" }}>

                <h2 className='sub-heading'>How Often Will I Update This Cookie Policy?</h2>

                <p className='mt-8 opacity-90'>I may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies I use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to stay informed about my use of cookies and related technologies.</p>

                <p className='mt-8 opacity-90'>The date at the top of this Cookie Policy indicates when it was last updated.</p>

            </motion.section>

            <motion.section id='contact' className='md:pt-12 pt-8' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ ease: "easeOut" }}>

                <h2 className='sub-heading'>How Can You Get Further Information?</h2>

                <p className='mt-8 opacity-90'>If you have questions or comments about my use of cookies or other technologies, you may email me at <a href='mailto://maya@seiiccubus.com' className='gradient-text'>maya@seiiccubus.com</a>.</p>

            </motion.section>

        </div>

    )
}

export default page;