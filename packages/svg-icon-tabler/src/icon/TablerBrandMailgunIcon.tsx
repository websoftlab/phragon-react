import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandMailgunIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandMailgunIcon = React.forwardRef<SVGSVGElement, TablerBrandMailgunIconProps>(
	function TablerBrandMailgunIcon(props, ref) {
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
				<path d="M17 12a2 2 0 1 0 4 0a9 9 0 1 0 -2.987 6.697" />
				<path d="M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
				<path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				<path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandMailgunIcon.displayName = "TablerBrandMailgunIcon";
}
