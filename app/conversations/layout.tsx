import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import ConversationsList from './components/ConversationsList';
import getConversations from '../actions/getConversations';

const ConversationsLayout = async ({ children }: { children: React.ReactNode }) => {
  const conversations = await getConversations();

  return (
    <Sidebar>
      <div className="h-full">
        <ConversationsList
          // users={users}
          // title="Messages"
          initialItems={conversations}
        />
        {children}
      </div>
    </Sidebar>
  );
};

export default ConversationsLayout;
