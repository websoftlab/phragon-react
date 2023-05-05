import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFolderGit2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFolderGit2Icon = React.forwardRef<SVGSVGElement, TablerFolderGit2IconProps>(
	function TablerFolderGit2Icon(props, ref) {
		const { children, ...rest } = props;
		return (
			<SvgIcon
				stroke="currentColor"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
				{...rest}
				ref={ref}
				size={24}
				icon={undefined}
				fill="none"
			>
				<path d="M22 13V8a1.974 1.974 0 0 0-2-2h-7.9c-.3 0-.7-.1-.9-.2-.3-.2-.5-.4-.7-.7l-.9-1.2c-.2-.3-.4-.5-.7-.7-.3-.1-.6-.2-1-.2H4a1.974 1.974 0 0 0-2 2v13c0 1.1.9 2 2 2h5" />
				<path d="M22 19 A2 2 0 0 1 20 21 A2 2 0 0 1 18 19 A2 2 0 0 1 22 19" />
				<path d="M15 12 A2 2 0 0 1 13 14 A2 2 0 0 1 11 12 A2 2 0 0 1 15 12" />
				<path d="M18 19c-2.8 0-5-2.2-5-5v8" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFolderGit2Icon.displayName = "TablerFolderGit2Icon";
}
