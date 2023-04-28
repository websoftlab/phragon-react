import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFlipFlopsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFlipFlopsIcon = React.forwardRef<SVGSVGElement, TablerFlipFlopsIconProps>(
	function TablerFlipFlopsIcon(props, ref) {
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
				<path d="M18 4c2.21 0 4 1.682 4 3.758c0 .078 0 .156 -.008 .234l-.6 9.014c-.11 1.683 -1.596 3 -3.392 3s-3.28 -1.311 -3.392 -3l-.6 -9.014c-.138 -2.071 1.538 -3.855 3.743 -3.985a4.15 4.15 0 0 1 .25 -.007z" />
				<path d="M14.5 14c1 -3.333 2.167 -5 3.5 -5c1.333 0 2.5 1.667 3.5 5" />
				<path d="M18 16v1" />
				<path d="M6 4c2.21 0 4 1.682 4 3.758c0 .078 0 .156 -.008 .234l-.6 9.014c-.11 1.683 -1.596 3 -3.392 3s-3.28 -1.311 -3.392 -3l-.6 -9.014c-.138 -2.071 1.538 -3.855 3.742 -3.985c.084 0 .167 -.007 .25 -.007z" />
				<path d="M2.5 14c1 -3.333 2.167 -5 3.5 -5c1.333 0 2.5 1.667 3.5 5" />
				<path d="M6 16v1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFlipFlopsIcon.displayName = "TablerFlipFlopsIcon";
}
