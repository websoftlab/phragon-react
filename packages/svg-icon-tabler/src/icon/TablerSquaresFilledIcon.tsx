import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSquaresFilledIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSquaresFilledIcon = React.forwardRef<SVGSVGElement, TablerSquaresFilledIconProps>(
	function TablerSquaresFilledIcon(props, ref) {
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
				<path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
				<path d="M8 14.5l6.492 -6.492" />
				<path d="M13.496 20l6.504 -6.504l-6.504 6.504z" />
				<path d="M8.586 19.414l10.827 -10.827" />
				<path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSquaresFilledIcon.displayName = "TablerSquaresFilledIcon";
}
