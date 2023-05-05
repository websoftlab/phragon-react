import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFileCog2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFileCog2Icon = React.forwardRef<SVGSVGElement, TablerFileCog2IconProps>(function TablerFileCog2Icon(
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
			<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
			<path d="M14 2 L14 8 L20 8" />
			<path d="M14 15 A2 2 0 0 1 12 17 A2 2 0 0 1 10 15 A2 2 0 0 1 14 15" />
			<path d="M12 12v1" />
			<path d="M12 17v1" />
			<path d="m14.6 13.5-.87.5" />
			<path d="m10.27 16-.87.5" />
			<path d="m14.6 16.5-.87-.5" />
			<path d="m10.27 14-.87-.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFileCog2Icon.displayName = "TablerFileCog2Icon";
}
