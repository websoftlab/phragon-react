import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerZodiacSagittariusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerZodiacSagittariusIcon = React.forwardRef<SVGSVGElement, TablerZodiacSagittariusIconProps>(
	function TablerZodiacSagittariusIcon(props, ref) {
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
				<path d="M4 20l16 -16" />
				<path d="M13 4h7v7" />
				<path d="M6.5 12.5l5 5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerZodiacSagittariusIcon.displayName = "TablerZodiacSagittariusIcon";
}
