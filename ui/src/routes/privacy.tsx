import { Flex, Text } from "@chakra-ui/react";
import Footer from "../components/footer/footer.organism";
import Header from "../components/ui/header";
import Page from "../components/ui/page";
import { Link } from "react-router-dom";
import { MetaTags } from "../components/ui/meta-tags";
import { PagesURL } from "./consts";

export const PrivacyPolicyPage = () => {
  return (
    <Page>
      <MetaTags
        title="Privacy Policy"
        primary_description="Learn more about our privacy policy."
        secondary_description="Privacy Policy of Mad Competitions."
        url={PagesURL.PRIVACY}
      />

      <Header title="Privacy Policy" />

      <Flex
        justifyContent={"flex-start"}
        alignItems={"flex-start"}
        flexDir={"column"}
        gap={8}
        minH={"53vh"}
        color={"white"}
        py={8}
        px={4}
      >
        <Flex flexDir={"column"} gap={2}>
          <Text fontSize={"md"} fontWeight={"bold"}>
            Privacy Policy of Mad Competitions (
            <Link to={"/"}>
              <i>mcomps.co.uk</i>
            </Link>
            )
          </Text>
          <Text fontSize={"sm"}>
            This Application collects some Personal Data from its Users.
          </Text>
          <Text fontSize={"sm"}>
            This document can be printed for reference by using the print
            command in the settings of any browser.
          </Text>
        </Flex>
        <Flex flexDir={"column"} gap={2}>
          <Text fontSize={"md"} fontWeight={"bold"}>
            Policy summary
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"} pl={2}>
            Personal Data processed for the following purposes and using the
            following services:
          </Text>
          <Text fontSize={"sm"} pl={4}>
            - Contacting the User
          </Text>
          <Text fontSize={"sm"} pl={4}>
            - Mailing list or newsletter
          </Text>
          <Text fontSize={"sm"} pl={4}>
            - Traffic optimisation and distribution
          </Text>
          <Text fontSize={"sm"} pl={4}>
            - Google Analytics
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"} pl={2}>
            Information on opting out of interest-based advertising
          </Text>
          <Text fontSize={"sm"} pl={2}>
            In addition to any opt-out feature provided by any of the services
            listed in this document, Users may learn more on how to generally
            opt out of interest-based advertising within the dedicated section
            of the Cookie Policy.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"} pl={2}>
            Owner and Data Controller
          </Text>
          <Text fontSize={"sm"} pl={2}>
            Mad Media Productions LTD, 128 City Road, London, EC1V 2NX, United
            Kingdom
          </Text>
          <Text fontSize={"sm"} pl={2}>
            Owner contact email: info@madproductions.uk
          </Text>
        </Flex>
        <Flex flexDir={"column"} gap={2}>
          <Text fontSize={"md"} fontWeight={"bold"}>
            Types of Data collected
          </Text>
          <Text fontSize={"sm"}>
            Among the types of Personal Data that this Application collects, by
            itself or through third parties, there are: city; ZIP/Postal code;
            state; province; country; county; latitude (of city); longitude (of
            city); metro area; geography/region; Usage Data; Trackers; IP
            address; device information; app information; device logs; operating
            systems; browser information; language; launches; number of
            sessions; session duration; scroll-to-page interactions; mouse
            movements; scroll position; keypress events; motion sensor events;
            touch events; video views; clicks; browsing history; search history;
            session statistics; page views; interaction events; page events;
            custom events; Application opens; first name; last name; phone
            number; email address; unique device identifiers for advertising
            (Google Advertiser ID or IDFA, for example); geographic position;
            various types of Data.
          </Text>
          <Text fontSize={"sm"}>
            Complete details on each type of Personal Data collected are
            provided in the dedicated sections of this privacy policy or by
            specific explanation texts displayed prior to the Data collection.
          </Text>
          <Text fontSize={"sm"}>
            Personal Data may be freely provided by the User, or, in case of
            Usage Data, collected automatically when using this Application.
          </Text>
          <Text fontSize={"sm"}>
            Unless specified otherwise, all Data requested by this Application
            is mandatory and failure to provide this Data may make it impossible
            for this Application to provide its services. In cases where this
            Application specifically states that some Data is not mandatory,
            Users are free not to communicate this Data without consequences to
            the availability or the functioning of the Service.
          </Text>
          <Text fontSize={"sm"}>
            Users who are uncertain about which Personal Data is mandatory are
            welcome to contact the Owner.
          </Text>
          <Text fontSize={"sm"}>
            Any use of Cookies – or of other tracking tools — by this
            Application or by the owners of third-party services used by this
            Application serves the purpose of providing the Service required by
            the User, in addition to any other purposes described in the present
            document and in the Cookie Policy.
          </Text>
          <Text fontSize={"sm"}>
            Users are responsible for any third-party Personal Data obtained,
            published or shared through this Application.
          </Text>
        </Flex>
        <Flex flexDir={"column"} gap={2}>
          <Text fontSize={"md"} fontWeight={"bold"}>
            Mode and place of processing the Data
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"} pl={2}>
            Methods of processing
          </Text>
          <Text fontSize={"sm"} pl={2}>
            The Owner takes appropriate security measures to prevent
            unauthorised access, disclosure, modification, or unauthorised
            destruction of the Data. The Data processing is carried out using
            computers and/or IT enabled tools, following organisational
            procedures and modes strictly related to the purposes indicated. In
            addition to the Owner, in some cases, the Data may be accessible to
            certain types of persons in charge, involved with the operation of
            this Application (administration, sales, marketing, legal, system
            administration) or external parties (such as third-party technical
            service providers, mail carriers, hosting providers, IT companies,
            communications agencies) appointed, if necessary, as Data Processors
            by the Owner. The updated list of these parties may be requested
            from the Owner at any time.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"} pl={2}>
            Place
          </Text>
          <Text fontSize={"sm"} pl={2}>
            The Data is processed at the Owner's operating offices and in any
            other places where the parties involved in the processing are
            located.
          </Text>
          <Text fontSize={"sm"} pl={2}>
            Depending on the User's location, data transfers may involve
            transferring the User's Data to a country other than their own. To
            find out more about the place of processing of such transferred
            Data, Users can check the section containing details about the
            processing of Personal Data.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"} pl={2}>
            Retention time
          </Text>
          <Text fontSize={"sm"} pl={2}>
            Unless specified otherwise in this document, Personal Data shall be
            processed and stored for as long as required by the purpose they
            have been collected for and may be retained for longer due to
            applicable legal obligation or based on the Users’ consent.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"} pl={2}>
            The purposes of processing
          </Text>
          <Text fontSize={"sm"} pl={2}>
            The Data concerning the User is collected to allow the Owner to
            provide its Service, comply with its legal obligations, respond to
            enforcement requests, protect its rights and interests (or those of
            its Users or third parties), detect any malicious or fraudulent
            activity, as well as the following: Traffic optimisation and
            distribution, Spam and bots protection, Registration and
            authentication provided directly by this Application, Displaying
            content from external platforms, Managing contacts and sending
            messages, Contacting the User, Advertising and Analytics.
          </Text>
          <Text fontSize={"sm"} pl={2}>
            For specific information about the Personal Data used for each
            purpose, the User may refer to the section “Detailed information on
            the processing of Personal Data”.
          </Text>
        </Flex>
        <Flex flexDir={"column"} gap={2}>
          <Text fontSize={"md"} fontWeight={"bold"}>
            Further Information for Users
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"} pl={2}>
            Legal basis of processing
          </Text>
          <Text fontSize={"sm"} pl={2}>
            The Owner may process Personal Data relating to Users if one of the
            following applies:
          </Text>
          <Text fontSize={"sm"} pl={4}>
            - Users have given their consent for one or more specific purposes;
          </Text>
          <Text fontSize={"sm"} pl={4}>
            - Provision of Data is necessary for the performance of an agreement
            with the User and/or for any pre-contractual obligations thereof;
          </Text>
          <Text fontSize={"sm"} pl={4}>
            - Processing is necessary for compliance with a legal obligation to
            which the Owner is subject;
          </Text>
          <Text fontSize={"sm"} pl={4}>
            - Processing is related to a task that is carried out in the public
            interest or in the exercise of official authority vested in the
            Owner;
          </Text>
          <Text fontSize={"sm"} pl={4}>
            - Processing is necessary for the purposes of the legitimate
            interests pursued by the Owner or by a third party.
          </Text>
          <Text fontSize={"sm"} pl={2}>
            In any case, the Owner will gladly help to clarify the specific
            legal basis that applies to the processing, and in particular
            whether the provision of Personal Data is a statutory or contractual
            requirement, or a requirement necessary to enter into a contract.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"} pl={2}>
            Further information about retention time
          </Text>
          <Text fontSize={"sm"} pl={2}>
            Unless specified otherwise in this document, Personal Data shall be
            processed and stored for as long as required by the purpose they
            have been collected for and may be retained for longer due to
            applicable legal obligation or based on the Users’ consent.
          </Text>
          <Text fontSize={"sm"} pl={2}>
            Therefore:
          </Text>
          <Text fontSize={"sm"} pl={4}>
            - Personal Data collected for purposes related to the performance of
            a contract between the Owner and the User shall be retained until
            such contract has been fully performed.
          </Text>
          <Text fontSize={"sm"} pl={4}>
            - Personal Data collected for the purposes of the Owner’s legitimate
            interests shall be retained as long as needed to fulfill such
            purposes. Users may find specific information regarding the
            legitimate interests pursued by the Owner within the relevant
            sections of this document or by contacting the Owner.
          </Text>
          <Text fontSize={"sm"} pl={2}>
            The Owner may be allowed to retain Personal Data for a longer period
            whenever the User has given consent to such processing, as long as
            such consent is not withdrawn. Furthermore, the Owner may be obliged
            to retain Personal Data for a longer period whenever required to
            fulfil a legal obligation or upon order of an authority.
          </Text>
          <Text fontSize={"sm"} pl={2}>
            Once the retention period expires, Personal Data shall be deleted.
            Therefore, the right of access, the right to erasure, the right to
            rectification and the right to data portability cannot be enforced
            after expiration of the retention period.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"} pl={2}>
            The rights of Users based on the General Data Protection Regulation
            (GDPR)
          </Text>
          <Text fontSize={"sm"} pl={2}>
            Users may exercise certain rights regarding their Data processed by
            the Owner.
          </Text>
          <Text fontSize={"sm"} pl={2}>
            In particular, Users have the right to do the following, to the
            extent permitted by law:
          </Text>
          <Text fontSize={"sm"} pl={4}>
            - <b>Withdraw their consent at any time.</b> Users have the right to
            withdraw consent where they have previously given their consent to
            the processing of their Personal Data.
          </Text>
          <Text fontSize={"sm"} pl={4}>
            - <b>Object to processing of their Data.</b> Users have the right to
            object to the processing of their Data if the processing is carried
            out on a legal basis other than consent.
          </Text>
          <Text fontSize={"sm"} pl={4}>
            - <b>Access their Data.</b> Users have the right to learn if Data is
            being processed by the Owner, obtain disclosure regarding certain
            aspects of the processing and obtain a copy of the Data undergoing
            processing.
          </Text>
          <Text fontSize={"sm"} pl={4}>
            - <b>Verify and seek rectification.</b> Users have the right to
            verify the accuracy of their Data and ask for it to be updated or
            corrected.
          </Text>
          <Text fontSize={"sm"} pl={4}>
            - <b>Restrict the processing of their Data.</b> Users have the right
            to restrict the processing of their Data. In this case, the Owner
            will not process their Data for any purpose other than storing it.
          </Text>
          <Text fontSize={"sm"} pl={4}>
            - <b>Have their Personal Data deleted or otherwise removed.</b>{" "}
            Users have the right to obtain the erasure of their Data from the
            Owner.
          </Text>
          <Text fontSize={"sm"} pl={4}>
            -{" "}
            <b>
              Receive their Data and have it transferred to another controller.
            </b>{" "}
            Users have the right to receive their Data in a structured, commonly
            used and machine readable format and, if technically feasible, to
            have it transmitted to another controller without any hindrance.
          </Text>
          <Text fontSize={"sm"} pl={4}>
            - <b>Lodge a complaint.</b> Users have the right to bring a claim
            before their competent data protection authority.
          </Text>
          <Text fontSize={"sm"} pl={2}>
            Users are also entitled to learn about the legal basis for Data
            transfers abroad including to any international organization
            governed by public international law or set up by two or more
            countries, such as the UN, and about the security measures taken by
            the Owner to safeguard their Data.
          </Text>
        </Flex>
        <Flex flexDir={"column"} gap={2}>
          <Text fontSize={"md"} fontWeight={"bold"}>
            Details about the right to object to processing
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"}>
            Where Personal Data is processed for a public interest, in the
            exercise of an official authority vested in the Owner or for the
            purposes of the legitimate interests pursued by the Owner, Users may
            object to such processing by providing a ground related to their
            particular situation to justify the objection.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"}>
            Users must know that, however, should their Personal Data be
            processed for direct marketing purposes, they can object to that
            processing at any time, free of charge and without providing any
            justification. Where the User objects to processing for direct
            marketing purposes, the Personal Data will no longer be processed
            for such purposes. To learn whether the Owner is processing Personal
            Data for direct marketing purposes, Users may refer to the relevant
            sections of this document.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"}>
            How to exercise these rights
          </Text>
          <Text fontSize={"sm"}>
            Any requests to exercise User rights can be directed to the Owner
            through the contact details provided in this document. Such requests
            are free of charge and will be answered by the Owner as early as
            possible and always within one month, providing Users with the
            information required by law. Any rectification or erasure of
            Personal Data or restriction of processing will be communicated by
            the Owner to each recipient, if any, to whom the Personal Data has
            been disclosed unless this proves impossible or involves
            disproportionate effort. At the Users’ request, the Owner will
            inform them about those recipients.
          </Text>
        </Flex>
        <Flex flexDir={"column"} gap={2}>
          <Text fontSize={"md"} fontWeight={"bold"}>
            Additional information about Data collection and processing
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"} pl={2}>
            Legal action
          </Text>
          <Text fontSize={"sm"} pl={2}>
            The User's Personal Data may be used for legal purposes by the Owner
            in Court or in the stages leading to possible legal action arising
            from improper use of this Application or the related Services.
          </Text>
          <Text fontSize={"sm"} pl={2}>
            The User declares to be aware that the Owner may be required to
            reveal personal data upon request of public authorities.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"} pl={2}>
            Additional information about User's Personal Data
          </Text>
          <Text fontSize={"sm"} pl={2}>
            In addition to the information contained in this privacy policy,
            this Application may provide the User with additional and contextual
            information concerning particular Services or the collection and
            processing of Personal Data upon request.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"} pl={2}>
            System logs and maintenance
          </Text>
          <Text fontSize={"sm"} pl={2}>
            For operation and maintenance purposes, this Application and any
            third-party services may collect files that record interaction with
            this Application (System logs) or use other Personal Data (such as
            the IP Address) for this purpose.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"} pl={2}>
            Information not contained in this policy
          </Text>
          <Text fontSize={"sm"} pl={2}>
            More details concerning the collection or processing of Personal
            Data may be requested from the Owner at any time. Please see the
            contact information at the beginning of this document.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"} pl={2}>
            Changes to this privacy policy
          </Text>
          <Text fontSize={"sm"} pl={2}>
            The Owner reserves the right to make changes to this privacy policy
            at any time by notifying its Users on this page and possibly within
            this Application and/or - as far as technically and legally feasible
            - sending a notice to Users via any contact information available to
            the Owner. It is strongly recommended to check this page often,
            referring to the date of the last modification listed at the bottom.
          </Text>
          <Text fontSize={"sm"} pl={2}>
            Should the changes affect processing activities performed on the
            basis of the User’s consent, the Owner shall collect new consent
            from the User, where required.
          </Text>
        </Flex>
        <Flex flexDir={"column"} gap={2}>
          <Text fontSize={"md"} fontWeight={"bold"}>
            Definitions and legal references
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"} pl={2}>
            Personal Data (or Data)
          </Text>
          <Text fontSize={"sm"} pl={2}>
            Any information that directly, indirectly, or in connection with
            other information — including a personal identification number —
            allows for the identification or identifiability of a natural
            person.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"} pl={2}>
            Usage Data
          </Text>
          <Text fontSize={"sm"} pl={2}>
            Information collected automatically through this Application (or
            third-party services employed in this Application), which can
            include: the IP addresses or domain names of the computers utilised
            by the Users who use this Application, the URI addresses (Uniform
            Resource Identifier), the time of the request, the method utilised
            to submit the request to the server, the size of the file received
            in response, the numerical code indicating the status of the
            server's answer (successful outcome, error, etc.), the country of
            origin, the features of the browser and the operating system
            utilised by the User, the various time details per visit (e.g., the
            time spent on each page within the Application) and the details
            about the path followed within the Application with special
            reference to the sequence of pages visited, and other parameters
            about the device operating system and/or the User's IT environment.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"} pl={2}>
            User
          </Text>
          <Text fontSize={"sm"} pl={2}>
            The individual using this Application who, unless otherwise
            specified, coincides with the Data Subject.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"} pl={2}>
            Data Subject
          </Text>
          <Text fontSize={"sm"} pl={2}>
            The natural person to whom the Personal Data refers.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"} pl={2}>
            Data Processor (or Processor)
          </Text>
          <Text fontSize={"sm"} pl={2}>
            The natural or legal person, public authority, agency or other body
            which processes Personal Data on behalf of the Controller, as
            described in this privacy policy.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"} pl={2}>
            Data Controller (or Owner)
          </Text>
          <Text fontSize={"sm"} pl={2}>
            The natural or legal person, public authority, agency or other body
            which, alone or jointly with others, determines the purposes and
            means of the processing of Personal Data, including the security
            measures concerning the operation and use of this Application. The
            Data Controller, unless otherwise specified, is the Owner of this
            Application.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"} pl={2}>
            This Application
          </Text>
          <Text fontSize={"sm"} pl={2}>
            The means by which the Personal Data of the User is collected and
            processed.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"} pl={2}>
            Service
          </Text>
          <Text fontSize={"sm"} pl={2}>
            The service provided by this Application as described in the
            relative terms (if available) and on this site/application.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"} pl={2}>
            European Union (or EU)
          </Text>
          <Text fontSize={"sm"} pl={2}>
            Unless otherwise specified, all references made within this document
            to the European Union include all current member states to the
            European Union and the European Economic Area.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"} pl={2}>
            Cookie
          </Text>
          <Text fontSize={"sm"} pl={2}>
            Cookies are Trackers consisting of small sets of data stored in the
            User's browser.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"} pl={2}>
            Tracker
          </Text>
          <Text fontSize={"sm"} pl={2}>
            Tracker indicates any technology - e.g Cookies, unique identifiers,
            web beacons, embedded scripts, e-tags and fingerprinting - that
            enables the tracking of Users, for example by accessing or storing
            information on the User’s device.
          </Text>
          <Text fontSize={"md"} fontWeight={"bold"} pl={2}>
            Legal information
          </Text>
          <Text fontSize={"sm"} pl={2}>
            This privacy policy relates solely to this Application, if not
            stated otherwise within this document.
          </Text>
        </Flex>
      </Flex>
      <Footer />
    </Page>
  );
};
