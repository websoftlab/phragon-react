import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCone2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCone2Icon = React.forwardRef<SVGSVGElement, TablerCone2IconProps>(function TablerCone2Icon(
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
			<path d="M12 7m-7 0a7 3 0 1 0 14 0a7 3 0 1 0 -14 0" />
			<path d="M19 7v.5l-7 12.5l-7 -12.5v-.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCone2Icon.displayName = "TablerCone2Icon";
}
