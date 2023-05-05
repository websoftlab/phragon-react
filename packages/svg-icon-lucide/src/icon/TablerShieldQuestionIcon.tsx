import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerShieldQuestionIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerShieldQuestionIcon = React.forwardRef<SVGSVGElement, TablerShieldQuestionIconProps>(
	function TablerShieldQuestionIcon(props, ref) {
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
				<path d="M12 17h.01" />
				<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
				<path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerShieldQuestionIcon.displayName = "TablerShieldQuestionIcon";
}
