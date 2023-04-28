import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFolderBoltIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFolderBoltIcon = React.forwardRef<SVGSVGElement, TablerFolderBoltIconProps>(
	function TablerFolderBoltIcon(props, ref) {
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
				<path d="M13 19h-8a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v3.5" />
				<path d="M19 16l-2 3h4l-2 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFolderBoltIcon.displayName = "TablerFolderBoltIcon";
}
