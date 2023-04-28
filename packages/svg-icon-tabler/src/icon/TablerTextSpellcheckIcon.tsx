import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTextSpellcheckIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTextSpellcheckIcon = React.forwardRef<SVGSVGElement, TablerTextSpellcheckIconProps>(
	function TablerTextSpellcheckIcon(props, ref) {
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
				<path d="M5 15v-7.5a3.5 3.5 0 0 1 7 0v7.5" />
				<path d="M5 10h7" />
				<path d="M10 18l3 3l7 -7" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTextSpellcheckIcon.displayName = "TablerTextSpellcheckIcon";
}
