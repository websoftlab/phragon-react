import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCreativeCommonsSaIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCreativeCommonsSaIcon = React.forwardRef<SVGSVGElement, TablerCreativeCommonsSaIconProps>(
	function TablerCreativeCommonsSaIcon(props, ref) {
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
				<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
				<path d="M12 16a4 4 0 1 0 -4 -4v1" />
				<path d="M6 12l2 2l2 -2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCreativeCommonsSaIcon.displayName = "TablerCreativeCommonsSaIcon";
}
