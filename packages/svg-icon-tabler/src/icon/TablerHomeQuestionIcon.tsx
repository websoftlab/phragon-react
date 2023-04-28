import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHomeQuestionIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHomeQuestionIcon = React.forwardRef<SVGSVGElement, TablerHomeQuestionIconProps>(
	function TablerHomeQuestionIcon(props, ref) {
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
				<path d="M20.136 11.136l-8.136 -8.136l-9 9h2v7a2 2 0 0 0 2 2h7" />
				<path d="M9 21v-6a2 2 0 0 1 2 -2h2c.467 0 .896 .16 1.236 .428" />
				<path d="M19 22v.01" />
				<path d="M19 19a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerHomeQuestionIcon.displayName = "TablerHomeQuestionIcon";
}
