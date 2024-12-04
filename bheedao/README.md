# What is bheeDAO?

Our project intends to become a new tool for fair peer to peer rating, helping communities achieve shared goals. 

Rather than focusing on feedback on a specific task, we propose a system where each member is recurrently granted a predefined amount of Custom Community Tokens (CCT) each representing a dimension of the core values/objectives of the community.

These CCT tokens don’t hold any value in themselves, however when donated to other team members they become Custom Reward Tokens (CRT), which are non-transferrable and linked indefinitely to the receiving wallet (“[soulbound](https://vitalik.ca/general/2022/01/26/soulbound.html)” like mechanism).
The team controls who can join and the properties of the CCT tokens via an internal voting system.

# Is this a DAO?

Many blockchain projects are managed, or aspire to have, a decentralized guide and this organizational structure goes by the name of DAO - Decentralized Autonomous Organization. We believe that this is a model still in its infancy and we see it as a cornerstone of the future organizations.

If we look at most DAO experiences so far, we realize how often they are weighted voting systems based on token possession, mimicking the vote of shareholders' meetings. The rule is simple, the more tokens you have, the more power you have.

The weak point goes to how these governance tokens are distributed, who decides what and when distribution happens. We think that the aggregated peer-to-peer feedback received over time will be a very solid metric to assign governance roles within a DAO.

bheeDAO aims to build that mechanism of positive reinforcement of collective action.

In order to work, this system needs to be easy to use as a game, but definitely not gamable by its members as it has trust management as its core functionality. 

On top of it, based on our experience, we think the feedback should be not instantaneous nor transparent:

Instant feedback is frequently linked to instant emotions, while proper value recognition resists over time;
retro-feedback effects (e.i. I give you a like because you liked me) are very common and detrimental. 

The solution envisioned so far to address these challenges in bheeDAO is to use anonymous and time-shifted transactions.

In order for an organization to succeed in achieving collective action, it is important to recognize and give leadership to those members who contribute more and are in line with the core values.

As we all experience, this dynamic is relatively easy to manage in small groups, but becomes very difficult in larger groups. bheeDAO could be a tool to facilitate a healthy dynamic of value recognition even in medium-size organizations.

# Ok, but how would that work in practice?

KuoriniciDAO is a web3 decentralized app designed around teams. 
We can imagine coworkers, friends, gamers, activist groups, could be any team working on a project online or offline.
Users can create a new team or join an existing one through a voting mechanism.
Each group defines its own tokens and has full control on their properties, just like a DAO should be.

The crucial characteristic of bheeDAO is that these tokens can be only donated among the members as a sign of gratitude for the contribution in the team, and cannot be subsequently transferred.

The Smart Contract distributes the tokens among participants on a recurring period, but these tokens don’t have any value if the user holds them, they have to be donated to someone else.
We call this version of the tokens Custom Community Tokens, or CCT.
On the receiving side, donated tokens become Custom Reward Tokens, CRT. Custom Reward Tokens stay in the recipient wallet forever and are a proof of peer-to-peer recognition.

# Here’s an example

We have a team of 5 that created a “little heart” token representing “relationship effort to keep the community together”. This token is set with a recurrence of 1 month and a contract supply of 10 hearts. Every month every team member receives 10 “little hearts” (by the way, “cuoricini” is the italian word for “little heart”).
These “little hearts” are CCT, Custom Community Tokens, and have no value as they cannot be accumulated (i.e.  the following month the smart contract will reset the balance to ten). 

If memberA wants to recognise the positive contribution of memberB he can send him a couple of hearts. When memberB receives these CCT tokens the smart contract will convert them to Custom Reward Tokens (CRT) in member B wallet. CRT “little hearts” are “soulbound” type and cannot be moved anymore.

MemberB doesn’t know who sent him those 2 tokens, neither if they come from one or two team members.

We started the design of the system from the premise that it is not possible to establish in advance a predefined feedback rule. Each group is a reality of itself, each group defines internally its own tokens, the relationship between them and their online/offline meaning.

Continuing on the example above, the team could decide to introduce a Diamond CCT token, with the recurrence of only 1 diamond per year, to show an exceptional contribution to the project. MemberA wants to recognize memberC for his efforts without necessarily revealing from who it comes.
 
# What we developed so far

We are concluding the development of a Pilot project as proof-of-concept of the idea. An early stage of the Solidity contract is already on the Ropstein test network, which we tested within our internal team.
We are close to deploying the Pilot project on the arbitrum network to easily expand the test to other teams and receive feedback. 

The Pilot will include: 
- creation of teams and voting system to participate;
- voting system to create and change the CCT properties within a team. CCT properties include the token name, the duration of the recurrence period and the amount to refill at each period;
- donation mechanism between team members which converts CCT to CRT;
- a web3 frontend app that connects to the contract

We believe in the importance of having a working Pilot to verify the idea with other teams, collect feedback on the usage experience, prove our conviction in the concept and motivate ourselves to continue further, possibly expanding the development to include new people.

# Future Developments

Looking further after the Pilot, there are still many open challenges we have to face to reach a working solution.

The most important development must be on how to make the feedback mechanism truly anonymous. Right now we are studying solutions implemented in blockchain anonymous voting systems, and we are open to reach out to experts in the community.
Is important that this is done the right way as it is essential to build trust in the system.




