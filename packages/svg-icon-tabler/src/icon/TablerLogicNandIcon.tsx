import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLogicNandIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLogicNandIcon = React.forwardRef<SVGSVGElement, TablerLogicNandIconProps>(
	function TablerLogicNandIcon(props, ref) {
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
				<path d="M22 12h-3" />
				<path d="M2 9h3" />
				<path d="M2 15h3" />
				<path d="M7 5c6 0 8 3.5 8 7s-2 7 -8 7h-2v-14h2z" />
				<path d="M17 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerLogicNandIcon.displayName = "TablerLogicNandIcon";
}
