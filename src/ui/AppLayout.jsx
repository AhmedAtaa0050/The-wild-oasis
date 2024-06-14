import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  min-height: 100dvh;
`;

const Main = styled.main`
  padding: 4rem 4.8rem 6.4rem;
  background: var(--color-grey-100);
`;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function AppLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialISOpen={false} />
      <StyledAppLayout>
        <Header />
        <Sidebar />
        <Main>
          <Outlet />
        </Main>
      </StyledAppLayout>
    </QueryClientProvider>
  );
}

export default AppLayout;
