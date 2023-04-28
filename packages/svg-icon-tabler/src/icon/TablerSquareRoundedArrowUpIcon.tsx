import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSquareRoundedArrowUpIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSquareRoundedArrowUpIcon = React.forwardRef<SVGSVGElement, TablerSquareRoundedArrowUpIconProps>(
	function TablerSquareRoundedArrowUpIcon(props, ref) {
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
				<path d="M16 12l-4 -4l-4 4" />
				<path d="M12 16v-8" />
				<path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSquareRoundedArrowUpIcon.displayName = "TablerSquareRoundedArrowUpIcon";
}
