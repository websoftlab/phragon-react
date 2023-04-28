import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPlant2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPlant2Icon = React.forwardRef<SVGSVGElement, TablerPlant2IconProps>(function TablerPlant2Icon(
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
			<path d="M2 9a10 10 0 1 0 20 0" />
			<path d="M12 19a10 10 0 0 1 10 -10" />
			<path d="M2 9a10 10 0 0 1 10 10" />
			<path d="M12 4a9.7 9.7 0 0 1 2.99 7.5" />
			<path d="M9.01 11.5a9.7 9.7 0 0 1 2.99 -7.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPlant2Icon.displayName = "TablerPlant2Icon";
}
