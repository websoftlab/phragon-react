import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTargetArrowIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTargetArrowIcon = React.forwardRef<SVGSVGElement, TablerTargetArrowIconProps>(
	function TablerTargetArrowIcon(props, ref) {
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
				<path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				<path d="M12 7a5 5 0 1 0 5 5" />
				<path d="M13 3.055a9 9 0 1 0 7.941 7.945" />
				<path d="M15 6v3h3l3 -3h-3v-3z" />
				<path d="M15 9l-3 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTargetArrowIcon.displayName = "TablerTargetArrowIcon";
}
