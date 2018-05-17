#include<bits/stdc++.h>
using namespace std;

int main()
{
    int T,i,n,k,count;
    int arr[200];
    cin>>T;
    while(T--)
    {
        count=0;
        cin>>n>>k;
        
        for(i = 0; i < n; i++)
        {
            cin>>arr[i];
        }
        for(i = 0; i < n; i++)
        {
            if(arr[i]>=0)
            {
                count++;
            }
        }
        if(count>=k)
        {
            cout<<"No"<<endl;
        }
        else
        {
            cout<<"Yes"<<endl;
        }
    }
}