import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSquareRotatedForbid2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSquareRotatedForbid2Icon = React.forwardRef<SVGSVGElement, TablerSquareRotatedForbid2IconProps>(
	function TablerSquareRotatedForbid2Icon(props, ref) {
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
				<path d="M13.446 2.6l7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1 -2.892 0l-7.955 -7.955a2.045 2.045 0 0 1 0 -2.892l7.955 -7.955a2.045 2.045 0 0 1 2.892 0z" />
				<path d="M9.5 9.5l5 5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSquareRotatedForbid2Icon.displayName = "TablerSquareRotatedForbid2Icon";
}
