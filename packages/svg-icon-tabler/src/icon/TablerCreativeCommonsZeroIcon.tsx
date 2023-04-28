import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCreativeCommonsZeroIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCreativeCommonsZeroIcon = React.forwardRef<SVGSVGElement, TablerCreativeCommonsZeroIconProps>(
	function TablerCreativeCommonsZeroIcon(props, ref) {
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
				<path d="M12 12m-3 0a3 4 0 1 0 6 0a3 4 0 1 0 -6 0" />
				<path d="M14 9l-4 6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCreativeCommonsZeroIcon.displayName = "TablerCreativeCommonsZeroIcon";
}
