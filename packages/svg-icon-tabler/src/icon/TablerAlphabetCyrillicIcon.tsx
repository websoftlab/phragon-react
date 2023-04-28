import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAlphabetCyrillicIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAlphabetCyrillicIcon = React.forwardRef<SVGSVGElement, TablerAlphabetCyrillicIconProps>(
	function TablerAlphabetCyrillicIcon(props, ref) {
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
				<path d="M6 10h2a2 2 0 0 1 2 2v5h-3a2 2 0 1 1 0 -4h3" />
				<path d="M19 7h-3a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h1a2 2 0 0 0 2 -2v-3a2 2 0 0 0 -2 -2h-3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerAlphabetCyrillicIcon.displayName = "TablerAlphabetCyrillicIcon";
}
