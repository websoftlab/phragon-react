import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerNewspaperIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerNewspaperIcon = React.forwardRef<SVGSVGElement, TablerNewspaperIconProps>(
	function TablerNewspaperIcon(props, ref) {
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
				<path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
				<path d="M18 14h-8" />
				<path d="M15 18h-5" />
				<path d="M10 6h8v4h-8V6Z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerNewspaperIcon.displayName = "TablerNewspaperIcon";
}
