import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandGrammarlyIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandGrammarlyIcon = React.forwardRef<SVGSVGElement, TablerBrandGrammarlyIconProps>(
	function TablerBrandGrammarlyIcon(props, ref) {
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
				<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
				<path d="M15.697 9.434a4.5 4.5 0 1 0 .217 4.788" />
				<path d="M13.5 14h2.5v2.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandGrammarlyIcon.displayName = "TablerBrandGrammarlyIcon";
}
