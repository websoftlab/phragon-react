import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMusic2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMusic2Icon = React.forwardRef<SVGSVGElement, TablerMusic2IconProps>(function TablerMusic2Icon(
	props,
	ref
) {
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
			<path d="M12 18 A4 4 0 0 1 8 22 A4 4 0 0 1 4 18 A4 4 0 0 1 12 18" />
			<path d="M12 18V2l7 4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMusic2Icon.displayName = "TablerMusic2Icon";
}
