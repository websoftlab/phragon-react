import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLoader2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLoader2Icon = React.forwardRef<SVGSVGElement, TablerLoader2IconProps>(function TablerLoader2Icon(
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
			<path d="M12 3a9 9 0 1 0 9 9" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLoader2Icon.displayName = "TablerLoader2Icon";
}
