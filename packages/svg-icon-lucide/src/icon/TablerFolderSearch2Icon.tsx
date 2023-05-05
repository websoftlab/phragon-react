import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFolderSearch2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFolderSearch2Icon = React.forwardRef<SVGSVGElement, TablerFolderSearch2IconProps>(
	function TablerFolderSearch2Icon(props, ref) {
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
				<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
				<path d="M14 12.5 A2.5 2.5 0 0 1 11.5 15 A2.5 2.5 0 0 1 9 12.5 A2.5 2.5 0 0 1 14 12.5" />
				<path d="M13.27 14.27 15 16" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFolderSearch2Icon.displayName = "TablerFolderSearch2Icon";
}
